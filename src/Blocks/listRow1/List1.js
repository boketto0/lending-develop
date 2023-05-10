import './List1.css';
import ListWrapper1 from './ListWrapper1';
// import Circle from '../images/list1_images/Oval.svg'
// import Icon1 from '../images/list1_images/icon1.1.svg'
// import Icon2 from '../images/list1_images/icon1.2.jpg'
// import Icon3 from '../images/list1_images/icon1.3.svg'
// import Icon4 from '../images/list1_images/icon1.4.svg'

function List1(props) {

  const  listItems = [
    {
      // picture: <img src={Circle}/>,
      // icon: <img src={Icon1}/>,
      text: 'Запускать продукты быстрее и дешевле'
    },
    {
      // picture: <img src={Circle}/>,
      // icon: <img src={Icon2}/>,
      text: 'Просто проверять гипотезы'
    },
    {
      // picture: <img src={Circle}/>,
      // icon: <img src={Icon3}/>,
      text: 'Только лучшие практики'
    },
    {
      // picture: <img src={Circle}/>,
      // icon: <img src={Icon4}/>,
      text: 'Довольные пользователи'
    }
]


    return(
        <ListWrapper1 className="list1-block">

          { listItems.map((li) => {
            return(
              <div className='list1-item'>
                {/* <div className='list1-item__picture'>{li.picture}
                  <div className='list1-item__icon'>{li.icon}</div>
                </div> */}
                <div className='list1-item__text'>{li.text}</div>
              </div>
            )
          })}
      </ListWrapper1>
    )

}

export default List1;