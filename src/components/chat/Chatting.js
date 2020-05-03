import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField, InputBase, Chip } from "@material-ui/core";

import DoneIcon from "@material-ui/icons/Done";
import SendIcon from "@material-ui/icons/Send";

const styles = {
  root: {
    flexGrow: 1
  },
  app: {
    height: "100%"
  },
  gallery: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "90%"
  },
  flex: {
    flex: 1
  },
  plusButton: {
    position: "absolute",
    bottom: 10
  }
};

class Chatting extends React.Component {

    constructor(){
        super()
        this.state = {
            messages: [],
            typed: '',
            isTyping: false,
            vMsgIndex: 0,
            vMsg: [
                {
                    msg: `Hey, My name is John. How can I help you today ?`,
                    tags: []    
                },
                {
                    msg: `A fever is the body's way of battling an illness. 
                    Although it's possible to have one without a known cause.`,
                    tags: []    
                },
                {
                    msg: `Please choose what are the symptoms you have `,
                    tags: [,
                        'headache',
                        'warm forehead',
                        'chills',
                        'aching muscles',
                        'dehydration',
                    ]
                }
            ]
        }
    }

    componentDidMount(){
        let {messages, vMsg, vMsgIndex} = this.state
        messages.push(this.incoming(vMsg[vMsgIndex]))
        this.setState({messages, vMsgIndex: vMsgIndex+1})
    }

    outgoing = (msg) => {
        return (
            <div className="outgoing">
                <div className="bubble">{msg}</div>
            </div>
        )
    }

    handleTags=()=>{

    }

    incoming =(msg)=>{
        return (
            <div className="incoming">
                <div className="bubble">{msg.msg}</div>
                {msg.tags.length>0 && (
                    <div className=''>
                        {msg.tags.map((item, index)=>
                            <Chip 
                            className={`chips color${index}`}
                            color="primary"
                            onDelete={this.handleTags}
                            deleteIcon={<DoneIcon />}
                            label={item}></Chip>
                        )}
                    </div>
                )}
            </div>
        )
    }

    handleChange=(event)=>{
        this.setState({
            isTyping: true,
            typed: event.target.value
        }, ()=>{
            setTimeout(()=>{
                this.setState({isTyping: false})
            },500)
        })
    }

    handleSubmit=()=>{
        if(this.state.typed){
            let {messages, vMsg, vMsgIndex} = this.state
            messages.push(this.outgoing(this.state.typed))
            this.setState({
                messages,
                isTyping: true,
                typed: ''
            }, ()=>{
                setTimeout(()=>{
                    
                    if(vMsg.length>=vMsgIndex+1){
                        messages.push(this.incoming(vMsg[vMsgIndex]))
                        this.setState({
                            isTyping: false, 
                            messages,
                            vMsgIndex: vMsgIndex+1
                        })
                    }
                    
                },1000)
            })
        }
    }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <div className="container">
          <div className="chatbox">
            <div className="top-bar">
              <Grid container>
                <Grid item xs={1} sm={1}>
                  <div className="avatar">
                    <p>J</p>
                  </div>
                </Grid>
                <Grid item xs={10} sm={10} style={{alignSelf: 'center'}}>
                  <div className="name">John</div>
                </Grid>
                <Grid item xs={1} sm={1} style={{alignSelf: 'center'}}>
                  <div className="menu">
                    <div className="dots"></div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="middle">
              <div className="voldemort">
                {this.state.messages.map(item=>item)}
              </div>
            </div>
            <div className="bottom-bar">
                {this.state.isTyping && (<div className="typing">
                  <div className="bubble">
                    <div className="ellipsis one"></div>
                    <div className="ellipsis two"></div>
                    <div className="ellipsis three"></div>
                  </div>
                </div>)}
              <div className="chat">
                <Grid container>
                  <Grid item sm={10} xs={10}>
                    <InputBase fullWidth
                      className="input"
                      inputProps={{className: 'input'}}
                      placeholder="Type a message..."
                      onChange={this.handleChange}
                      value = {this.state.typed}
                    />
                  </Grid>
                  <Grid item sm={2} xs={2}>
                    <Button type="submit" className="button" onClick={this.handleSubmit}>
                      <SendIcon />
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Chatting.propTypes = {
  classNamees: PropTypes.object
};

export default withStyles(styles)(Chatting);
