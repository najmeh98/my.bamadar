import React from "react";
import styled, { css } from "styled-components";
import { ArrowDown, ArrowIcon } from "./home/icons/Icons";
import { useState } from "react";
import { config } from "./home/utils/main";
import router from "next/router";
export default function Categorybox({ showmore, item, key, arrayItem }) {
  const [isExpended, setisExpended] = useState(false);
  const [itemstoShow, SetitemstoShow] = useState(5);

  const Showmore = () => {
    if (itemstoShow == 5) {
      setisExpended(true);
      //  setisClick(true);
      SetitemstoShow(Item);
    } else {
      SetitemstoShow(5);
      setisExpended(false);
    }
  };
  let Item = item.Sub_categories && item.Sub_categories.length;
  return (
    <CardsItem>
      <SubCategories>
        {item.image && (
          <img src={config + item.image} alt="img" width="85px" height="85px" />
        )}
        <p>{item.name}</p>
        {item.sub_categories.length > 5 ? (
          <div>
            <MoreIcon onClick={Showmore}>
              <ArrowDown />
              {isExpended ? <span>مشاهده کمتر</span> : <span>مشاهده همه</span>}
            </MoreIcon>
          </div>
        ) : (
          ""
        )}
      </SubCategories>
      <ListItem>
        {arrayItem &&
          arrayItem.slice(0, itemstoShow).map((Cat, index) => {
            console.log(itemstoShow);
            console.log(arrayItem);
            return (
              // console.log(Cat.name);

              <>
                <p
                  key={index}
                  onClick={() => {
                    router.push({
                      pathname: "/category",
                      query: {
                        action: Cat.id,
                        page: 1,
                      },
                    });
                  }}
                >
                  <Icon>
                    <ArrowIcon />
                  </Icon>
                  {Cat.name}
                </p>
              </>
            );
          })}
      </ListItem>
    </CardsItem>
  );
}

const CardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-gap: 20px;
  margin: 10px;
`;

const CardsItem = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 5px;
  padding: 5px;
  display: flex;
  flex-flow: row-reverse;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  line-height: 1.8rem;
  height: 100%;
  p {
    font-size: 0.8rem;
    text-align: right;
    vertical-align: middle;
  }
  background: #fff;
`;

const ListItem = styled.div`
  display: block;
  text-align: start;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;

  p {
    cursor: pointer;
  }
`;

const Icon = styled.div`
  width: 1em;
  // vertical-align: middle;
  display: inline-block;
  //align-items: flex-end;
  cursor: pointer;
  height: 1em;
  margin-left: 8px;
  font-size: 0.6rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const SubCategories = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 150px;

  img {
    justify-self: center;
  }
  p {
    text-align: center;
    font-size: 0.8rem;
    // font-weight: bold;
  }
`;

const MoreIcon = styled.div`
  display: flex;
  align-items: center;
  color: rgb(23, 155, 191);
  font-size: 0.8rem;
  text-align: center;
  cursor: pointer;
  span {
    height: auto;
    transition-duration: 300ms;
  }
`;
