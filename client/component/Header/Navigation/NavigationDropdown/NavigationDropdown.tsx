const ProductDropdown = () => {
  return (
    <div className='dropdown dropdown-hover'>
      <div tabIndex={0} role='button' className='btn m-1'>
        Продукція
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
      >
        <li>
          <a>Випічка</a>
        </li>
        <li>
          <a>Хліб</a>
        </li>
        <li>
          <a>Десерт</a>
        </li>
      </ul>
    </div>
  )
}

export default ProductDropdown
