import React, { Component } from 'react'

export default class Todo extends Component {
constructor(){
    super();
    {
        this.state={
            tasks:[{task:"check-mail",id:1},{task:"Read article",id:2},{task:"complete Hw",id:3}]
        }
 
}
}

handleChange=(e)=>{
    console.log(e.target.value)
    this.setState({
      currentTask:e.target.value
    })
}
handleSubmit=()=>{
    this.setState({
        tasks:[...this.state.tasks,{task:this.state.currentTask,id:this.state.tasks.length+1}],
        currentTask:""
    })
}
handleDelete=(id)=>{
    let narr=this.state.tasks.filter((taskObj)=>{
        return taskObj.id!=id
    })

        this.setState({
            tasks:[...narr]
        
        })
    }
    
   


    render() {
    return (
      <div>

<div class="input-group mb-3">
  <input type="text" class="form-control"  value={this.state.currentTask} onChange={this.handleChange} placeholder="Enter a task"/>
  <button  onClick={this.handleSubmit} className="btn btn-outline-success mx-2" type="button" id="button-addon2">Submit</button>
</div>

          
          {
            this.state.tasks.map((taskObj)=>(
             
                <li className='list-group-item' key={taskObj.id}>
                    <p className='fs-5'>{taskObj.task}</p>
                    <button onClick={()=>this.handleDelete(taskObj.id)} type="button" class="btn btn-danger">delete</button>

                    
                </li>
                
            ))
          }
          
        
      </div>
    )
  }
}
