import React, { Component } from 'react';
import { Dialog, DialogActions, DialogTitle, DialogContent, Button, Typography, } from '@material-ui/core';

class CustomerDelete extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         open:false
      }
    }

    handleClickOpen = () =>{
        this.setState({
            open: true
        })
    }

    handleClose = () =>{
        this.setState({
            open: false,
        })
    }
    

    deleteCustomer = (id) => {
        const url = '/api/customers/' + id;
        fetch(url,{
            method: 'DELETE'
        })
        this.props.stateRefresh();
    }

    render() {
        return (
            <div>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>
                        삭제 경고
                        </DialogTitle>
                    <DialogContent>
                        <Typography>
                            삭제하시겠습니까?
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant={"contained"} color={'primary'} onClick={(e) => {this.deleteCustomer(this.props.id)}}> 삭제 </Button>
                        <Button variant={"outlined"} color={'primary'} onClick={this.handleClose} >닫기</Button>
                    </DialogActions>
                </Dialog>
                <Button variant={'contained'} color={'secondary'} onClick={this.handleClickOpen} >삭제</Button>
            </div>
            
        );
    }
}

export default CustomerDelete;