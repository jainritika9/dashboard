import { Container, Divider, Grid,Input,Menu,Segment, TextArea ,Form} from "semantic-ui-react";

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
    <Grid.Column width={10}>
        <Segment style={{fontSize:18}} stacked>
          <b>Users Overview</b>
          <Divider/>
        </Segment>
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment  style={{fontSize:18}} stacked>
          <b>Users By Device</b>
          <Divider/>
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
            <Input placeholder='Enter..' fluid></Input><br/>
            <Form>
    <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
  </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={7}>
          <Segment color='teal' stacked  style={{fontSize:15}}>
            <b>Discussions</b>
            <Divider/>
            
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment color='teal' stacked  style={{fontSize:15}}>
            <b>Top Referrals</b>
            <Divider/>
            <Segment vertical>Github </Segment>
            <Segment vertical>Stack Overflow</Segment>
            <Segment vertical>Haccker News</Segment>
            <Segment vertical>Reedit </Segment>
            <Segment vertical>You Tube </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </Grid.Row>
    </Grid>
  );
}

export default App;
