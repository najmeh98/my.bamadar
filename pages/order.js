import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Config, config } from "../components/home/utils/main";
import { Formik, useFormik, useFormikContext, ErrorMessage } from "formik";
import { Wrapper, Stylepage } from "./login";
export const Order = () => {
  const [user, setUser] = useState();

  //اپدیت اطلاعات

  const updateInfo = () => {
    // let value = localStorage.getItem(JSON.parse("initialValue"));
    let token = localStorage.getItem("token");
    axios
      .post(
        config + "/api/user/update_info",
        {
          ...data,
        },
        {
          headers: {
            Authorization: `bear${token}`,
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  // اطلاعات کاربر
  const userInfo = useCallback(() => {
    axios
      .post(
        config + "/api/user/me",
        {
          token: localStorage.getItem("token"),
        }

        // {
        //   headers: {
        //     Authorization: `bears${localStorage.getItem("token")}`,
        //     Accept: "application/json",
        //   },
        // }
      )
      .then((response) => {
        console.log(response);
        console.log(response.data.data);
        setUser(response.data.data);
        //  response.data.status == "ok" && router.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    userInfo();
  }, [userInfo]);

  const data = {
    address: user?.address || null,
    birthDate: user?.birthDate || null,
    email: user?.email || null,
    favBreakfast: user?.favBreakfast || "",
    favDrink: user?.favDrink || "",
    favFastFood: user?.favFastFood || "",
    favFood: user?.favFood || "",

    favFruit: user?.favFruit || "",
    favJinkFood: user?.favJinkFood || "",
    favFruit: user?.favFruit || "",
    favSportTeam: user?.favSportTeam || "",
    first_name: user?.first_name || "",
    gender: "",
    height: user?.height || "",
    job: user?.job || "",
    last_name: user?.last_name || "",
    location: {},
    marriage: false,
    marriageDate: user?.marriageDate || "",
    national_code: user?.national_code || "",
    no: user?.no || "",
    noOfChildren: user?.noOfChildren || "",
    partnerBirthDate: user?.partnerBirthDate || "",
    phone: user?.phone || "",
    referral: user?.referral || "",
    sex: user?.sex || "",
    weight: user?.weight || "",
  };
  console.log({ ...data });
  console.log(data);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: user?.first_name || "",
      family: user?.last_name || "",
      phone: user?.phone || "",
      mobile: user?.mobile || "",
      address: user?.address || "",
      no: user?.no || "",
      referral: user?.referral || "",
      marriage: user?.marriage || "",
      noOfChildren: user?.noOfChildren || "",
      sex: user?.sex || "",
      job: user?.job || "",
      height: user?.height || "",
      weight: user?.weight || "",
      email: user?.email || "",
      favSportTeam: user?.favSportTeam || "",
      favFood: user?.favFood || "",
      favBreakfast: user?.favBreakfast || "",
      favFastFood: user?.favFastFood || "",
      favDrink: user?.favDrink || "",
      favFruit: user?.favFruit || "",
      favJinkFood: user?.favJinkFood || "",
      partnerBirthDate: user?.partnerBirthDate || "",
      marriageDate: user?.marriageDate || "",
      national_code: user?.national_code || "",
      club_level: "bronze",
      club_points: 0,
      wallet: user?.wallet || "",
      birthDate: user?.birthDate || "",
    },
    // onSubmit: (values) => {
    //   if (loginCheck)
    //     if (localStorage.getItem("initialVslue")) {
    //       localStorage.setItem("initialVslue", JSON.stringify(values));
    //     }
    //   //alert(JSON.stringify(values, null, 2));
    // },
  });

  return (
    <Stylepage>
      <Wrapper>
        <Table>
          <Content>
            <Title style={{ width: "100%" }}> ویرایش اطلاعات</Title>

            <StyleForm onSubmit={formik.handleSubmit}>
              <InputCon>
                <Label htmlFor="firstname">نام</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </InputCon>

              <InputCon>
                <Label htmlFor="family"> نام خانوادگی</Label>
                <Input
                  type="text"
                  id="family"
                  name="family"
                  onChange={formik.handleChange}
                  value={formik.values.family}
                />
              </InputCon>

              <InputCon>
                <Label htmlFor="phone"> تلفن ثابت(به همراه پیش شماره)</Label>
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
              </InputCon>
              {/* <Space vertical={15} /> */}
              <Input
                type="text"
                id="mobile"
                name="mobile"
                onChange={formik.handleChange}
                value={formik.values.mobile}
              />

              <InputCon>
                <Label htmlFor="address"> آدرس</Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />
              </InputCon>

              <Address>
                <InputCon>
                  <Label htmlFor="no"> پلاک</Label>
                  <Input
                    props
                    type="text"
                    id="no"
                    name="no"
                    onChange={formik.handleChange}
                    value={formik.values.no}
                  />
                </InputCon>
                <>
                  <Select>
                    {/* <FleshIcon /> */}
                    <option value="دزفول">دزفول</option>
                  </Select>
                </>
              </Address>
              {/* <Space vertical={25} /> */}

              <InputCon>
                <Label htmlFor="referral">شماره موبایل معرف </Label>
                <Input
                  type="text"
                  id="referral"
                  name="referral"
                  onChange={formik.handleChange}
                  value={formik.values.referral}
                  placeholder="________09"
                />
              </InputCon>
              {/* <Space vertical={30} /> */}

              <p>اطلاعات تکمیلی</p>
              {/* <Data /> */}
              {/* <Space vertical={20} /> */}

              <Address>
                <p> وضعیت تاهل:</p>
                <span>مجرد</span>
                <span>متاهل</span>
              </Address>

              {/* <Space vertical={30} /> */}

              <Address>
                <p>تاریخ تولد </p>
                <div>
                  <Select>
                    <option>____</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </Select>{" "}
                  /
                  <Select>
                    <option>____</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </Select>{" "}
                  /
                  <Select>
                    <option>____</option>
                    <option>1320</option>
                    <option>1321</option>
                    <option>1322</option>
                    <option>1323</option>
                    <option>1324</option>
                    <option>1325</option>
                    <option>1326</option>
                    <option>1327</option>
                    <option>1328</option>
                    <option>1329</option>
                    <option>1330</option>
                    <option>1331</option>
                    <option>1332</option>
                    <option>1333</option>
                    <option>1334</option>
                    <option>1335</option>
                    <option>1336</option>
                    <option>1337</option>
                    <option>1338</option>
                    <option>1339</option>
                    <option>1340</option>
                    <option>1341</option>
                    <option>1342</option>
                    <option>1343</option>
                    <option>1344</option>
                    <option>1345</option>
                    <option>1346</option>
                    <option>1347</option>
                    <option>1348</option>
                    <option>1349</option>
                    <option>1350</option>
                    <option>1351</option>
                    <option>1352</option>
                    <option>1353</option>
                    <option>1354</option>
                    <option>1355</option>
                    <option>1356</option>
                    <option>1357</option>
                    <option>1358</option>
                    <option>1359</option>
                    <option>1360</option>
                    <option>1361</option>
                    <option>1362</option>
                    <option>1363</option>
                    <option>1364</option>
                    <option>1365</option>
                    <option>1366</option>
                    <option>1367</option>
                    <option>1368</option>
                    <option>1369</option>
                    <option>1370</option>
                    <option>1371</option>
                    <option>1372</option>
                    <option>1373</option>
                    <option>1374</option>
                    <option>1375</option>
                    <option>1376</option>
                    <option>1377</option>
                    <option>1378</option>
                    <option>1379</option>
                    <option>1380</option>
                    <option>1381</option>
                    <option>1382</option>
                    <option>1383</option>
                    <option>1384</option>
                    <option>1385</option>
                    <option>1386</option>
                    <option>1387</option>
                    <option>1388</option>
                    <option>1389</option>
                    <option>1390</option>
                    <option>1391</option>
                    <option>1392</option>
                    <option>1393</option>
                    <option>1394</option>
                    <option>1395</option>
                    <option>1396</option>
                    <option>1397</option>
                    <option>1398</option>
                  </Select>
                </div>
              </Address>
              {/* <Space vertical={20} /> */}

              <Address>
                <p>جنسیت</p>
                <Select style={{ width: "100px", margin: "10px" }}>
                  <option></option>
                  <option value="مرد">مرد</option>
                  <option value="زن">زن</option>
                </Select>
              </Address>

              <InputCon>
                <Label htmlFor="no"> شغل</Label>
                <Input
                  type="text"
                  id="job"
                  name="job"
                  onChange={formik.handleChange}
                  value={formik.values.job}
                />
              </InputCon>
              <InputCon>
                <Label htmlFor="height"> قد</Label>
                <Input
                  type="text"
                  id="height"
                  name="height"
                  onChange={formik.handleChange}
                  value={formik.values.height}
                />
              </InputCon>

              {/* <Label htmlFor="no"> وزن</Label>
              <Input
                type="text"
                id="height"
                name="height"
                onChange={formik.handleChange}
                value={formik.values.height}
              /> */}
              <InputCon>
                <Label htmlFor="weight"> وزن</Label>
                <Input
                  type="text"
                  id="weight"
                  name="weight"
                  onChange={formik.handleChange}
                  value={formik.values.weight}
                />
              </InputCon>

              <InputCon>
                <Label htmlFor="email"> ایمیل</Label>
                <Input
                  type="text"
                  id="weight"
                  name="weight"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </InputCon>

              <Address>
                <p>تیم ورزشی موردعلاقه</p>
                <Select style={{ width: "100px", margin: "10px" }}>
                  <option></option>
                  <option value="استقلال">استقلال</option>
                  <option value="پرسپولیس">پرسپولیس</option>

                  <option value="سایر">سایر</option>
                </Select>
              </Address>

              <Address>
                <p>غذای موردعلاقه </p>
                <Select style={{ width: "100px", margin: "10px" }}>
                  <option></option>
                  <option value="آبگوشت ها">آبگوشت ها</option>
                  <option value="کباب ها">کباب ها</option>
                  <option value="کتلت، شامی و کوکو">کتلت، شامی و کوکو</option>
                  <option value="خوراک ها ی حبوبات">خوراک ها ی حبوبات</option>
                  <option value="خوراکهای مرغ">خوراکهای مرغ</option>
                  <option value="خوراکهای ماهی">خوراکهای ماهی</option>
                  <option value="چلو خورش ها">چلو خورش ها</option>
                  <option value="دیگر">دیگر</option>
                </Select>
              </Address>

              <Address>
                <p>صبحانه موردعلاقه</p>
                <Select style={{ width: "100px", margin: "10px" }}>
                  <option></option>
                  <option value="کله پاچه">کله پاچه</option>
                  <option value="نیمرو و املت">نیمرو و املت</option>
                  <option value="حلیم و آش">حلیم و آش</option>
                  <option value="کره، پنیر و مربا">کره، پنیر و مربا</option>
                  <option value="شیر و کیک صبحانه">شیر و کیک صبحانه</option>
                  <option value="دیگر">دیگر</option>
                </Select>
              </Address>

              <Address>
                <p>فست فود موردعلاقه</p>
                <Select style={{ width: "100px", margin: "10px" }}>
                  <option></option>
                  <option value="ساندویچ ها">ساندویچ ها</option>
                  <option value="پیتزا ها">پیتزا ها</option>
                  <option value="برگرها">برگرها</option>
                  <option value="سوخاری ها">سوخاری ها</option>
                  <option value="دیگر">دیگر</option>
                </Select>
              </Address>

              <Address>
                <p>نوشیدنی موردعلاقه</p>
                <Select style={{ width: "100px", margin: "10px" }}>
                  <option></option>
                  <option value="نوشیدنی های گرم کافئین دار">
                    نوشیدنی های گرم کافئین دار
                  </option>
                  <option value="چای و دمنوش ها">چای و دمنوش ها</option>
                  <option value="شیک ها ">شیک ها </option>
                  <option value="کوکتل ها">کوکتل ها</option>
                  <option value="آبمیوه ها">آبمیوه ها</option>
                  <option value="دیگر">دیگر</option>
                </Select>
              </Address>

              <Address>
                <p>میوه موردعلاقه</p>
                <Select style={{ width: "100px", margin: "10px" }}>
                  <option></option>
                  <option value="انار">انار</option>
                  <option value="آلبالو">آلبالو</option>
                  <option value="آلو">آلو</option>
                  <option value="آناناس">آناناس</option>
                  <option value="انجیر">انجیر</option>
                  <option value="انگور">انگور</option>
                  <option value="به">به</option>
                  <option value="پرتقال">پرتقال</option>
                  <option value="توت فرنگی">توت فرنگی</option>
                  <option value="توت">توت</option>
                  <option value="خربزه">خربزه</option>
                  <option value="خرما">خرما</option>
                  <option value="خرمالو">خرمالو</option>
                  <option value="خیار">خیار</option>
                  <option value="زردآلو">زردآلو</option>
                  <option value="سیب">سیب</option>
                  <option value="طالبی">طالبی</option>
                  <option value="کیوی">کیوی</option>
                  <option value="گریپ‌فروت">گریپ‌فروت</option>
                  <option value="گلابی">گلابی</option>
                  <option value="گوجه سبز">گوجه سبز</option>
                  <option value="گیلاس">گیلاس</option>
                  <option value="لیمو شیرین">لیمو شیرین</option>
                  <option value="موز">موز</option>
                  <option value="نارگیل">نارگیل</option>
                  <option value="نارنج">نارنج</option>
                  <option value="نارنگی">نارنگی</option>
                  <option value="هلو">هلو</option>
                  <option value="هندوانه">هندوانه</option>
                  <option value="دیگر">دیگر</option>
                </Select>
              </Address>

              <Address>
                <p>تنقلات موردعلاقه</p>
                <Select style={{ width: "100px", margin: "10px" }}>
                  <option></option>
                  <option value="خشکبار">خشکبار</option>
                  <option value="بستنی">بستنی</option>
                  <option value="شکلات">شکلات</option>
                  <option value="آدامس و آبنبات">آدامس و آبنبات</option>
                  <option value="پاستیل">پاستیل</option>
                  <option value="بیسکویت">بیسکویت</option>
                  <option value="چیپس و پفک">چیپس و پفک</option>
                  <option value="لواشک">لواشک</option>
                  <option value="ژله">ژله</option>
                  <option value="دیگر">دیگر</option>
                </Select>
              </Address>
            </StyleForm>
            <Button>
              <button type="submit" onClick={updateInfo}>
                ثبت اطلاعات
              </button>
            </Button>
          </Content>
        </Table>
      </Wrapper>
    </Stylepage>
  );
};

export default Order;
// const Stylepage = styled.div`
//   width: 100%;
//   max-width: 1100px;
//   margin: auto;
// `;
const Table = styled.div`
  // display: flex;
  // justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: right;
`;

const Content = styled.div`
  //max-width: 600px;
  // display: flex;
  //  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 10px;
  margin: 0px auto;
  /* align-items: center;
  justify-content: center;
  text-align: right;
  border-radius: 5px; */
  background-color: #fff;
`;

const StyleForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  border-bottom: 2px solid rgb(231, 231, 231);
  padding: 10px;
`;

const Label = styled.label`
  position: absolute;
  //font-weight: bold;
  font-size: 0.9rem;
  //margin-top: -15px;
  z-index: 2;
  background-color: rgb(255, 255, 255);
  padding: 3px 8px;
  right: 10px;
  top: 8px;
`;

const InputCon = styled.div`
  position: relative !important;
  padding-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 0.9rem;
  font-family: ${(p) => p.theme.fontFamily};
  outline: none;
  //padding-left: 30px;
  border: 1px solid rgb(220, 225, 230);
  border-radius: 6px;
  height: 48px;
  width: 90%;
  &:focus {
    border-width: 1px;
    border-color: rgb(54, 182, 255);
  }

  //margin-left: 20px;
`;

const Address = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  //  direction: ltr;
  // padding-left: 22px;
  p {
    font-size: 0.8rem;
  }
`;

const Select = styled.select`
  font-family: ${(p) => p.theme.fontFamily};
  font-size: ${(p) => p.theme.fontSize.normall};
  border: none;
  outline: none;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0px;
  button {
    background: rgb(59, 180, 74);
    color: #fff;
    border-radius: 5px;
    margin-top: 15px;
    cursor: pointer;
    border: none;
    padding: 8px 15px;
    outline: none;
    font-family: ${(p) => p.theme.fontFamily};
    font-size: ${(p) => p.theme.fontSize.normall};
  }
`;
