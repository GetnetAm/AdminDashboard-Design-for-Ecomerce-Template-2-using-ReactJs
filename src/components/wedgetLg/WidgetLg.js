import React from 'react'
import "./WidgetLg.css"
function WidgetLg() {
const Button =({type})=>{
  return <button className={'widgetLgButton' + type}>{type}</button>
}
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>
        Latest Transaction

      </h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetTh'>Customer</th>
          <th className='widgetTh'>Date</th>
          <th className='widgetTh'>Amount</th>
          <th className='widgetTh'>Status</th>
          

        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIdhdsoFx-PGK0lJlOoXKuIC0DqBYecon_Q&usqp=CAU' alt='' className='widgetLgImg' />
            
          <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$1220.0</td>
          <td className='widgetLgStatus'>
            <Button type="Approved" />

     

          </td>


        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIdhdsoFx-PGK0lJlOoXKuIC0DqBYecon_Q&usqp=CAU' alt='' className='widgetLgImg' />
            
          <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$1220.0</td>
          <td className='widgetLgStatus'>
            <Button type="Pending" />

           

          </td>


        </tr>

        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIdhdsoFx-PGK0lJlOoXKuIC0DqBYecon_Q&usqp=CAU' alt='' className='widgetLgImg' />
            
          <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$1220.0</td>
          <td className='widgetLgStatus'>
            <Button type="Decline" />
          </td>


        </tr>

      </table>
       
    </div>
  )
}

export default WidgetLg
