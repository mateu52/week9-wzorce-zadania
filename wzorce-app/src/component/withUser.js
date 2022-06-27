import React from 'react';

function withUser(WrapperComponent){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={
                email: "jan@kowalski.pl",
                isAdmin: false
            }
        }
        render(){
            return(
                <WrapperComponent
                    email={this.state.email}
                    isAdmin={this.state.isAdmin}
                />
            )
        }
    };
} ;
export default withUser;