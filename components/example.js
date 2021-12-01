const Product = () => {
  //console.log(product);
  const [proPromo, setproPromo] = useState([]);
  const [related, Setrelated] = useState([]);
  const router = useRouter();
  const id = router.query.id;
  console.log("/product/" + id);

  console.log(proPromo);

  useEffect(() => {
    // getPromo();
    axios
      .get(`https://www.bamadar.com/data/api/product/${id}`)
      .then(function (response) {
        // handle success
        setproPromo(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, [id]);

  return (
    <div>
      {/* <InputBox /> */}

      {/* <Image src="/bg.png" alt="nodel" width="400px" height="400px" /> */}
      {/* <Image src="/chips.jpeg" alt="chips" width="300px" height="300px" /> */}
      {/* <img src={`/images/p${id}.png`} /> */}
      {/* {proPromo.images && <img src={proPromo.images.thumb} />} */}
      {/* {typeof proPromo.images === "undefined" ? null : (
              <Image src={proPromo.images.thumb} width="165px" height="250px" />
            )} */}

      {/* <Image src="/chips.jpeg" alt="chips" width="300px" height="300px" /> */}
      {/* <p>{proPromo.name}</p>
            {proPromo.related &&
              proPromo.related.length != 0 &&
              proPromo.related.map((subCat, id) => {
                console.log(subCat.images);
                return (
                  // <div key={subCat.id}>
                  <div key={id}>
                    <p>{subCat.name}</p>
                    {typeof images === "undefined" ? null : (
                      <img src={subCat.images.thumb} />
                    )}
  
                    {/* {subCat.image && <img src={subCat.images.thumb} />} */}

      {/* {subCat.images && <img src={subCat.images.thumb} />} */}
      {/* </div>
                );
              })} */}
    </div>
  );
};

//export const getServerSideProps = async ({ context }) => {
//   const res = await fetch(
//     `https://my.bamadar.com/api/get_promotions/${context}`
//   );

//   const product = await res.json();

//   return {
//     props: {
//       product,
//     },
//   };
// };
