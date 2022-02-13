import Button from "./Button"

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h3>AfriHub</h3>
        {/* <img src="./public/Afrihub-logo.png"></img> */}
      </div>
      <div className="header-right">
        <p>Explore Afrihub</p>
        <p>Feature</p>
        <p>Create</p>
        <p>Team</p>
        <p>FAQ</p>
        <Button />
      </div>
    </header>
  )
}

export default Header
