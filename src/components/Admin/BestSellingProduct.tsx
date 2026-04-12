
interface ProductsTableTitleInterface {
  title: string[],
}

interface ProductsTableBodyInterface {
  uid: number,
  product: [{
    image: string,
    description: [{
      productName: string,
      productCategoryDescription: string
    }]
  }],
  category: string,
  brand: string,
  price: number,
  stock: string,
  rating: number,
  order: number,
  sales: number,
  action: [{
    view: string,
    edit: string,
    deleteAction: string,
  }]
}

const BestSellingProduct = () => {

  const ProductsTableTitle: ProductsTableTitleInterface[] = [
    {
      title: [
        "UID",
        "PRODUCT",
        "CATEGORY",
        "BRAND",
        "PRICE",
        "STOCK",
        "RATING",
        "ORDER",
        "SALES",
        "ACTIONS",
      ]

    }


  ]
  const ProductsTableBody: ProductsTableBodyInterface[] = [
    {
      uid: 1234,
      product: [{
        image: "images/ch.jpg",
        description: [{
          productName: "Top and Skirt ",
          productCategoryDescription: "Women exclusive"
        }]
      }],
      category: "Womans",
      brand: "Balenciaga",
      price: 100,
      stock: "starImages",
      rating: 5,
      order: 942,
      sales: 4000,
      action: [{
        view: "eye image",
        edit: "pencil Image",
        deleteAction: "delete image",
      }]

    },
    {
      uid: 49240,
      product: [{
        image: "images/ed.jpg",
        description: [{
          productName: "Top and Skirt ",
          productCategoryDescription: "Women exclusive"
        }]
      }],
      category: "Unisex",
      brand: "Fendi",
      price: 100,
      stock: "starImages",
      rating: 5,
      order: 942,
      sales: 4000,
      action: [{
        view: "eye image",
        edit: "pencil Image",
        deleteAction: "delete image",
      }]

    }


  ]

  const RenderProductsTableTitles = () => {
    return (

      ProductsTableTitle.map(({ title }) => (
        title.map((item) => (
          <th className="text-center border text-white bg-blue-600 h-14">
            {item}
          </th>

        ))
      ))

    )
  }

  const RenderProductsTableBody = () => {

    return (
      ProductsTableBody.map(({
        uid,
        product,
        category,
        brand,
        price,
        stock,
        rating,
        order,
        sales,
        action
      }) => (
        <tr key={uid} className="border-4 border-red-600 h-20">
          <td className="border text-center">#{uid}</td>
          <td className="border text-center h-full">{product.map(({ image, description }) => (
            <div className="flex h-full space-x-4 p-3 items-center">
              <div className=" h-20 w-20">
                <img src={image} className=" h-full w-full  object-cover " />
              </div>
              <div>
                {description.map(({ productName, productCategoryDescription }) => (
                  <div>
                    <div><p className="font-bold text-xl">{productName}</p></div>

                    <div><p>{productCategoryDescription}</p></div>
                  </div>
                ))}
              </div>
            </div>
          ))}</td>

          <td className="border text-center">{category}</td>
          <td className="border text-center">{brand}</td>
          <td className="border text-center">{price}</td>
          <td className="border text-center">{stock}</td>
          <td className="border text-center">{rating}</td>
          <td className="border text-center">{order}</td>
          <td className="border text-center">{sales}</td>
          <td className="border text-center">{action.map(({ view, edit, deleteAction }) => (
            <div>
              <div>
                <div>{view}</div>
                <div>{edit}</div>
                <div>{deleteAction}</div>
              </div>
            </div>
          ))}</td>
        </tr>
      ))

    )
  }



  return (
    <div>
      <main>
        <div>
          <h2>Best Selling Products</h2>
        </div>
        <div>
          <div>
            <p>SHOW BY</p>
            <select>
              <option>None</option>
              <option>ten</option>
              <option>ten</option>
              <option>ten</option>

            </select>

          </div>
          <div>
            <p>CATEGORY BY</p>
            <select>
              <option>None</option>
              <option>ten</option>
              <option>ten</option>
              <option>ten</option>

            </select>

          </div>

        </div>

        <section>
          <div>
            <table className="border w-full">
              <thead className="">
                <tr>
                  {RenderProductsTableTitles()}

                </tr>
              </thead>

              <tbody>
                {
                  RenderProductsTableBody()
                }             </tbody>
            </table>
          </div>
        </section>
      </main>
    </div >
  )
}

export default BestSellingProduct
