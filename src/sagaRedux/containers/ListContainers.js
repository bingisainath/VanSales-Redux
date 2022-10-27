import { connect } from 'react-redux'

import List from '../components/List'

const mapStateToProps = (state) =>{
  return({data:state.data})
}

const mapDispatchToProps =  (dispatch) => ({
  async getUsers() {
    console.log("user function");
    await dispatch({ type: 'GET_USERS_REQUEST' })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
