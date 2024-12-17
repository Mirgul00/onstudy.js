import "../IeltsPage/IeltsPage.css"

import icon from "../../assets/icons/greyBall.png"
import ball from "../../assets/icons/greyBall.png"
import w from "../../assets/icons/место-removebg-preview (1) 3.png"
import q from "../../assets/icons/серый_шар-removebg-preview 2.png"

function IeltsPage () {

    return (
        <>

<div className='a-body2'>
            <div className='icon1'>
            <img src={w} alt="" />
        </div>
        <div className='ball1'>
            <img src={q} alt="" />
        </div>
        
            <h1 className='a-word'> IELTS</h1>
            
            
            <p className='mainword1'>Наша команда - это преподаватели SAT с опытом работы <br />
            минимум 1.5 года и средним баллов 1550, преподаватели <br />
            IELTS с опытом работы более 2х лет и личным<br /> баллом выше 8.5</p>

         <div className='ball2'>
            <img src={ball} alt="" />
        </div> 


        {/* //////////////////карточка ряд1................... */}
        <div className="card05">
        <div className="card-content5">
            <h1 className='a-mainword1'>Курсы IELTS </h1>
            <p>1.Каждое занятие длится два часа <br /> этот курс даст вам шорошие воз- <br /> можности где вы можете развива    </p>
    
            
            

             
            <h1 className='a-word35'>10.000 cом</h1>
             <a href=""class='card-button5'>купить</a>
             
             <p>2.Три месяца обучения </p>
             <hr className='a-lineword5' />
            <p>2.Три месяца обучения </p>
            <hr  className='a-lineword25'/>
            <p>3.Три месяца обучения </p>
            <hr  className='a-lineword35'/>
            
        </div>
    </div> 


    {/* ..................ряд2///////////////////// */}

      <div className="card16">
         <div className="card-content16">
            <h1 className='a-h2'>Курсы IELTS</h1>
            <p>1.Каждое занятие длится два часа  <br />.Каждое занятие длится два часа <br />.Каждое занятие длится два часа  </p>
    
            
            <h1 className='a-word26'>10.000 cом</h1>
            
             <a href=""class='card-button16'>купить </a>
             <p>1.Каждое занятие длится два часа   </p>
             <hr className='a-lineword6' />
            <p>2.Три месяца обучения </p>
            <hr  className='a-lineword26'/>
            <p>3.Три месяца обучения </p>
            <hr  className='a-lineword36'/>
        </div>
   </div> 

{/* /////////////программа интенсива.........      */}
<h1 className='a-mainword2'>ПРОГРАММА ИНТЕНСИВА</h1>

<div className='a-square '>
    <p className='a-writing1'>Writing:</p>
    <p className='a-allword2'>1. Verbs: Agreement & Tense</p>
    <p className='a-allword3'>2. Sentences & Fragments</p>
    <p className='a-allword4'>3. Combining & Separating Sentence</p>
    <p className='a-allword5'>4. Transitions</p>
    <p className='a-allword6'>5. Non-Essential & Essential Clauses</p>
    <p className='a-allword7'>6. Question Marks</p>
    <p className='a-allword8'>7. Additional Comma Uses & Misuses</p>
    <p className='a-allword9'>8. Colons & Dashes</p>
    <p className='a-allword10'>9. Apostrophes: Plural vs. Possessive</p>
    <p className='a-allword11'>10. Apostrophes: Plural vs. Possessive</p>

    



      <hr className='line'/>
{/* 2часть */}
<div className='a-2words'>
<p className='a-2writing1'>Reading:</p>
    <p className='a-2allword2'>1. Verbs: Agreement & Tense</p>
    <p className='a-2allword3'>2. Sentences & Fragments</p>
    <p className='a-2allword4'>3. Combining & Separating Sentence</p>
    <p className='a-2allword5'>4. Transitions</p>
    <p className='a-2allword6'>5. Non-Essential & Essential Clauses</p>
    <p className='a-2allword7'>6. Question Marks</p>
    <p className='a-2allword8'>7. Additional Comma Uses & Misuses</p>
    <p className='a-2allword9'>8. Colons & Dashes</p>
    {/* <p className='a-2allword10'>9. Apostrophes: Plural vs. Possessive</p>
    <p className='a-2allword11'>10. Apostrophes: Plural vs. Possessive</p> */}
</div>



</div>

{/* .............carusel////////// */}
<div className='a-2slider'>

    {/* <Slider2/> */}

    {/* <div className='a-assets'>
        <img src={ball} alt="" />
    </div> */}
{/* 
<p className='coz'>Отзывы и результаты<br /> наших  студентов</p>
<p className='coz1'>Которые успешно  и так же <br /> сдали IELTS </p> */}
</div>





{/* /////////////////accrdion///////////////////////// */}
<p className='questions5'>Часто задаваемые вопросы</p>
<hr  className='a-line-questions5'/>
<div></div>
<ul class="accordion">
    <li>
        <input type="radio"  name='accordion' id='first' checked/>
        <label for="first">Сколько секций в SAT?</label>
        <div className='content'>
            <p>SAT состоит из двух основных частей - Verbal (Reading+Writing) и Математика (с калькулятором и без). Общее количество секций - 4. </p>
        </div>
    </li>

    <li>
        <input type="radio"  name='accordion' id='second' />
        <label for="second">C какого уровня я могу начать подготовку?</label>
        <div className='content'>
            <p>Подготовку к SAT желательно начинать с уровня Upper-Intermediate. </p>
        </div>
    </li>

    <li>
        <input type="radio"  name='accordion' id='third' />
        <label for="third">Можно ли готоаитсяк секциям отдельно?</label>
        <div className='content'>
            <p>Да, конечно. Важно, чтобы у вас было достаточно времени для подготовки ко всем всем секциям.</p>
        </div>
    </li>

    <li>
        <input type="radio"  name='accordion' id='four' />
        <label for="four">Я 9-классемне рано начинать подготовку?</label>
        <div className='content'>
            <p>Нет, самое время. Если у вас уже хороший уровень английского языка, то начинайте подготовку уже сейчас. К слову, сертификат SAT действует 5 лет. </p>
        </div>
    </li>
</ul>

<div className='ball35'>
            <img src={w} alt="" />
        </div> 



<div className='lamp5'>
            <img src={ball} alt="" />
</div>


<div className='ball45'>
            <img src={w} alt="" />
        </div> 

<div className='icon25'>
            <img src={icon} alt="" />
</div>





        
              
    </div>



    
        </>
    )
}
export default IeltsPage;
