import './TrirdBlock.css'
import {Button, ButtonType} from "../components/button/Button";
import List2 from './listRow2/List2';
import {Card, CardType, CardWrapper} from '../components/cards/Card'
import Icon from '../images/ДС2 1.svg'

function ThirdBlock(props) {

    const text='Все компоненты'
    const type = ButtonType.LINE

    const elements = [
        {
        //   picture: <img src={Icon2}/>,
        title: 'Справочники'
        },
        {
        //   picture: <img src={Icon2}/>,
        title: 'Интерактивная документация'
        },
        {
        //   picture: <img src={Icon2}/>,
        title: 'Панель центра уведомлений'        
    }
    ]

    return(
        <div className="third-block">
            <div className="third-block__textblock">
                <div className='third-block__title'>Выполненные проекты</div>
                <div className='third-block__text'>Проекты собранные на основе нашей дизайн
                {"\n"} системы для решения любых поставленных задач</div>
            </div>
            <CardWrapper className="second-block_cards">
                { elements.map((el) => {
                    return(
                    <Card title={el.title} text={el.text} cardType={CardType.SECOND}/>
                    )
                })}
            </CardWrapper>
            <div className="button3-position">
                <Button text={text} type={type} Type={ButtonType.LINE}/>
            </div>
            <div className="third-block__container">
                <img src={Icon} className="third-block__picture"/>
                <div>
                    <div className="third-block__container__title">Что такое дизайн‑система 
                        {"\n"}и зачем она нужна?
                    </div>
                    <div className="text__block-text">
                    Дизайн-система — это набор компонентов, правил, предписаний 
                    {"\n"}и инструментов для повышения качества и скорости разработки
                    {"\n"}продуктов, а также эффективной поддержки существующих
                    </div>
                    <List2/>
                </div>
            </div>
        </div>
    );
  }
  
  export default ThirdBlock;