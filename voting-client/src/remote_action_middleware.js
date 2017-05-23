//currying
// equivalent to
// export default function(store) {
//  return function(next) P
//    return (action) {
//    }
//  }
// }
export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
 console.log('in middleware', action);
  return next(action);
}
