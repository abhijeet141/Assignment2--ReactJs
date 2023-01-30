import React from "react";
import { Button, Segment, Grid } from 'semantic-ui-react'

export const Counter = Props =>{
return(
<div>
<Segment>
<h1>Count</h1>
<h3>{Props.count}</h3>
<Grid>
  <Grid.Column width={8}>
<Button content='Increment' color="green"  onClick = {()=>{Props.setCount(Props.count + 1)}} />
</Grid.Column>
{Props.count === 0 ? <Grid.Column width={8}> <Button disabled content='Decrement' color="red"/> </Grid.Column> :  <Grid.Column width={8}> <Button content='Decrement' color="red" onClick = {()=>{Props.setCount(Props.count - 1)}}/>  </Grid.Column>}
</Grid>
</Segment>
</div>
)}