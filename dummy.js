




<div className="container-fluid">
  <div className="row">
    <div className="col">
   <a href="http://localhost:3000/DisplayProfile" onClick={()=>(localStorage.setItem("customer",order.customer_name))}>{order.customer_name}</a>
    </div>
    <div className="col">
  {order.DISHES}
    </div>
    <div className="col">
  {order.delivery_status}
    </div>
    <div className="col">
 Order Status
    </div>
  </div>
  <div className="row">
      <div className="row" style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"10px"}}>
      <Col>
      <select
      className="form-value"
      name="delivery"
      style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"3rem", fontSize:"1.1rem", width:"200px"}}
      onChange={
        (e)=>{
          setDelivery(e.target.value);
        }}
      >
        <option value="select">Select</option>
        <option value="Order Received">Order Received</option>
        <option value="Preparing">Preparing</option>
        <option value="On the Way">On the Way</option>
        <option value="Delivered">Delivered</option>
        <option value="Pick Up Ready">Pick Up Ready</option>
        <option value="Picked Up">Picked Up</option>
      </select>
      </Col>
      <Col>
        <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px",textAlign:"left"}} onClick={()=>{updateCartTable(order.customer_name,order.restaurant_name)}}>✔️</button>
      </Col>
  </div>
</div>




<div className="row" style={{ fontFamily:"Postmates", height:"50px",lineHeight:"50px",marginRight:"12%",marginTop:"0"}}>
<Col>
<a href="http://localhost:3000/DisplayProfile" onClick={()=>(localStorage.setItem("customer",order.customer_name))}>{order.customer_name}</a>
</Col>
<Col>
 {order.DISHES}
</Col>
{order.delivery_status}
<Col>
<div className="container-fluid">
    <div className="row" style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"10px"}}>
    <Col>
    </Col>
    <Col>
    </Col>
    <Col>
    <select
    className="form-value"
    name="delivery"
    style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"3rem", fontSize:"1.1rem", width:"200px"}}
    onChange={
      (e)=>{
        setDelivery(e.target.value);
      }}
    >
      <option value="select">Select</option>
      <option value="Order Received">Order Received</option>
      <option value="Preparing">Preparing</option>
      <option value="On the Way">On the Way</option>
      <option value="Delivered">Delivered</option>
      <option value="Pick Up Ready">Pick Up Ready</option>
      <option value="Picked Up">Picked Up</option>
    </select>
    </Col>
    <Col>
      <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px",textAlign:"left"}} onClick={()=>{updateCartTable(order.customer_name,order.restaurant_name)}}>✔️</button>
    </Col>
    </div>
</div>
</Col>
</div>
