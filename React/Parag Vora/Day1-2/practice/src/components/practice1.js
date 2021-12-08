
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'parag',
    lastName: 'vora'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );

export  default element;