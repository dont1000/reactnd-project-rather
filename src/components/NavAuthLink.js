const NavAuthLink = ({user}) => {

console.log("jetzt aber", user);

        return (
          <div>
            <span>Hello {user.name}</span>
          </div>
        );

}

export default NavAuthLink
