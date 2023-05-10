import './FourthBlock.css'
import List3 from './listRow3/List3';
import {Card, CardType, CardWrapper} from '../components/cards/Card'

function FourthBlock() {

    const elements = [
        {
        //   picture: <img src={Icon2}/>,
          title: 'Button',
          text: " "/*'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'*/
        },
        {
        //   picture: <img src={Icon2}/>,
          title: 'Alerts',
          text: " " /*'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'*/
        },
        {
        //   picture: <img src={Icon2}/>,
          title: 'Button group',
          text: " "/*'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pellentesque eu eget.'*/
        }
    ]        

    return(
        <div className='fourth-block'>
            <div className='fourth-block__color-container'>
            <div className='fourth-block__title'>Анонсы и релизы</div>
            <div className='fourth-block__text'>Будьте вкурсе всех последних
                {"\n"}изменений и доработок в нашей дизайн системе
            <CardWrapper>
                { elements.map((el) => {
                    return(
                    <Card title={el.title} text={el.text} cardType={CardType.THIRD}/>
                    )
                })}
            </CardWrapper>
            </div>
            </div>
                <div className='fourth-block__container'>
                <div className='fourth-block__container__title'>Часто задаваемые вопросы</div>
                <div className='fourth-block__container__subtitle'>Мы ответили на самые популярные 
                    {"\n"}вопросы, чтобы вы могли понять и решить 
                    {"\n"}свою возникшую проблему
            </div>
            <List3/>
            </div>
        </div>
    )
}

export default FourthBlock;