import { Container, Divider, Grid,Input,Menu,Segment, TextArea ,Form, Dropdown, Icon,Image, Button, Item, ItemMeta, ItemGroup} from "semantic-ui-react";
import {VictoryPie} from 'victory'
const options1=[
  {key: 'Last Week',
text: 'Last Week',
value: 'Last Week',},

{key: 'Today',
text: 'Today',
value: 'Today',},

{key: 'Last Month',
text: 'Last Month',
value: 'Last Month',},

{key: 'Last Year',
text: 'Last Year',
value: 'Last Year',}]
function App() {
  return (
    <Grid >
      <Grid.Row>
      <Menu inverted fluid>
        <Menu.Item
          name='home'
        />
        <Menu.Item
          name='messages'
          
        />
        <Menu.Item
          name='friends'
          
        />
      </Menu></Grid.Row>
      <Grid.Row style={{padding:20,paddingTop:3}}>
    <Grid columns={5} stackable>
      <Grid.Column>
        <Segment color='blue' textAlign='center' raised>
          <div style={{fontSize:15,color:'gray'}}>
            Posts
          <h2>2,309</h2></div>
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment color='green' textAlign='center' raised>
          <div style={{fontSize:15,color:'gray'}}>
            Pages
          <h2>123</h2></div>
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment color='yellow' textAlign='center' raised>
          <div style={{fontSize:15, color:'gray'}}>
            Comments
          <h2>8,564</h2></div>
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment color='orange' textAlign='center' raised>
          <div style={{fontSize:15,color:'gray'}}>
            New Customers
          <h2>33</h2></div>
        </Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment color='pink' textAlign='center' raised>
          <div style={{fontSize:15,color:'gray'}}>
            Subscribers
          <h2>21,343</h2></div>
        </Segment>
      </Grid.Column>
    </Grid>
    </Grid.Row>
    <Grid.Row style={{padding:20,paddingTop:3}}>
    <Grid columns={2} stackable>
    <Grid.Column width={11}>
        <Segment style={{fontSize:18}} stacked raised>
          <b>Users Overview</b>
          <Divider/>
          <Segment vertical style={{paddingTop:3}} >
            <Input type='date'/><Input type='date'/><Button basic style={{float:'right'}}>View Full Report <Icon name='long arrow alternate right'/></Button>
          </Segment>
          <Segment vertical>
           <Image src="https://i.stack.imgur.com/WXPgx.png" fluid style={{height:350}}/>
          </Segment>
        </Segment>
      </Grid.Column>
      <Grid.Column width={5}>
        <Segment  style={{fontSize:18}} stacked raised>
          <b>Users By Device</b><Divider/>
          <Segment vertical>
          <VictoryPie height={390}
  colorScale={["#3895D3", "#58CCED", "#77C3EC"]}
  data={[
    { x: "Desktop", y: 63.8 },
    { x: "Tablet", y: 24.2 },
    { x: "Mobile", y: 7.5},
  ]} stroke={'white'} strokeWidth={3}
/></Segment>
<Segment vertical>
<Dropdown style={{fontSize:14}}
      search
      selection
      placeholder='Last Week'
      options={options1}
    />
    <a href='https://report' style={{float:"right",fontSize:14,paddingTop:7}}>
      View Full Report<Icon name="long arrow alternate right"/>
      </a>        
      </Segment>
      </Segment>
      </Grid.Column>
      </Grid>
    </Grid.Row>
    <Grid.Row style={{padding:20,paddingTop:3}}>
      <Grid columns={3} stackable>
        <Grid.Column width={5}>
          <Segment color='teal' stacked  style={{fontSize:15}}>
           <b>New Draft</b>
            <Divider/>
            <Input placeholder='Brave New world' fluid></Input><br/>
            <Form>
    <TextArea placeholder='Words can be like X-rays if you use them properly..' style={{ minHeight: 400,marginBottom:45 }} />
  </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={7}>
          <Segment color='teal' stacked  style={{fontSize:15}}>
            <b>Discussions</b>
            <Divider/>
            <Segment vertical>
            <Item.Group divided>
        <Item>
          <Item.Image src='https://www.w3schools.com/howto/img_avatar2.png' size="tiny" />
          <Item.Content style={{fontSize:17}}>
              <p>John Doe on Hello World!- 3 days ago</p>
              <p style={{color:'gray'}}>Well, the way they make shows is, they make one show ...</p>
              <div><Button attached='left' basic style={{padding:8,fontSize:12}}><Icon name="check" color='green'/>Approve</Button>
              <Button attached='left' basic style={{padding:8,fontSize:12}}><Icon name="close" color='red'/>Reject</Button>
              <Button attached='right'basic style={{padding:8,fontSize:12}}><Icon name="bars"/>Edit</Button></div>
          </Item.Content>
        </Item>
              
            <Item>
              <Item.Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXp3DxP80ArpRzsB0XWBG9Ow5GeuefbLrUHw&usqp=CAU' size="tiny"/>
              <Item.Content style={{fontSize:17}}>
              <p>John Doe on Hello World!- 4 days ago</p>
              <p style={{color:'gray'}}>Well, the way they make shows is, they make one show ...</p>
              <div ><Button attached='left' basic style={{padding:8,fontSize:12}}><Icon name="check" color='green'/>Approve</Button>
              <Button attached='left' basic style={{padding:8,fontSize:12}}><Icon name="close" color='red'/>Reject</Button>
              <Button attached='right' basic style={{padding:8,fontSize:12}}><Icon name="bars"/>Edit</Button></div>
          </Item.Content>
            </Item>
            <Item>
              <Item.Image src='https://www.skyewallet.in/images/admin_avatar.png' size="tiny"/>
              <Item.Content style={{fontSize:17}}>
              <p>John Doe on Hello World!- 5 days ago</p>
              <p style={{color:'gray'}}>Well, the way they make shows is, they make one show ...</p>
              <div><Button attached='left' basic style={{padding:8,fontSize:12}}><Icon name="check" color='green'/>Approve</Button>
              <Button attached='left' basic style={{padding:8,fontSize:12}}><Icon name="close" color='red'/>Reject</Button>
              <Button attached='right' basic style={{padding:8,fontSize:12}}><Icon name="bars"/>Edit</Button></div>
          </Item.Content>
            </Item>
            </Item.Group>
            </Segment>
            <Segment vertical textAlign='center'><Button basic>View All Comments</Button></Segment>
            
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment color='teal' stacked  style={{fontSize:15}}>
            <b>Top Referrals</b>
            <Divider/>
            <Segment vertical>Github</Segment>
            <Segment vertical>Stack Overflow</Segment>
            <Segment vertical>Haccker News</Segment>
            <Segment vertical>Reedit </Segment>
            <Segment vertical>The Next Web </Segment>
            <Segment vertical>Tech Crunch </Segment>
            <Segment vertical>You Tube </Segment>
            <Segment vertical>Adobe </Segment>
            <Segment vertical style={{fontSize:10}}>
             <Dropdown style={{fontSize:12}} search selection placeholder='Last Week' options={options1}/>
    <a href='https://report' style={{float:"right",fontSize:14,paddingTop:7}}>
       Full report<Icon name="long arrow alternate right"/>
      </a>        
      </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </Grid.Row>
    </Grid>
  );
}

export default App;
