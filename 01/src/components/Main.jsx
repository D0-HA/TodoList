function Main() {
  return (
    <>
      <main className="app-main">
        <ul className="lists">
          <li className="list-item is_active">
            <img src="src/assets/check_active.png" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              aliquam nostrum minus accusantium hic soluta itaque fugiat
              accusamus repellat, ducimus quas, quod provident harum est. Rerum
              quod eius architecto animi!
            </p>
            <button type="button" className="button-type_delete">
              x
            </button>
          </li>
          <li className="list-item">
            <img src="src/assets/check_inactive.png" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              aliquam nostrum minus accusantium hic soluta itaque fugiat
              accusamus repellat, ducimus quas, quod provident harum est. Rerum
              quod eius architecto animi!
            </p>
            <button type="button" className="button-type_delete">
              x
            </button>
          </li>
          <li className="list-item">
            <img src="src/assets/check_inactive.png" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              aliquam nostrum minus accusantium hic soluta itaque fugiat
              accusamus repellat, ducimus quas, quod provident harum est. Rerum
              quod eius architecto animi!
            </p>
            <button type="button" className="button-type_delete">
              x
            </button>
          </li>
          <li className="list-item">
            <img src="src/assets/check_inactive.png" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              aliquam nostrum minus accusantium hic soluta itaque fugiat
              accusamus repellat, ducimus quas, quod provident harum est. Rerum
              quod eius architecto animi!
            </p>
            <button type="button" className="button-type_delete">
              x
            </button>
          </li>
        </ul>
        <div className="input-container">
          <input type="text" placeholder="무엇을 할까용" />
          <button type="button" className="button-type_add">
            +
          </button>
        </div>
      </main>
    </>
  );
}

export default Main;
