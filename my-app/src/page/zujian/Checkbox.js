import React from 'react';
import { Checkbox } from 'antd';


class BOS extends React.Component{
    
    onChange =(e) => { 
        console.log(`checked = ${e.target.checked}`);
};
render(){
    return(
        <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
    )
}
}

export default BOS;

/*import React from 'react';
import { Checkbox } from 'antd';


class BOS extends React.Component{
    onChange =(e) => { 
     console.log(`checked = ${e.target.checked}`);
    };
render(){
    return(
        <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
    )
  }
}

export default BOS;
*/