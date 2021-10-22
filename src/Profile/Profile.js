import PropTypes from "prop-types";
import React from "react"

const Profile = (props) => {
  const { fullName, bio, profession } = props
  const styleObject = {
    color: 'red',
    textAlign: 'center'
  }
  const handleName = e => {
    e.preventDefault()
    alert(fullName)
  }
  return(
    <div style={styleObject}>
      {props.children}
      <h2>Full Name: {fullName}</h2>
      <h2>Bio: {bio}</h2>
      <h2>Profession: {profession}</h2>
      <span onClick={handleName}>Click Me</span>
    </div>
  )
}


Profile.defaultProps = {
  fullName: "Emmanuel Omole",
  bio: "A solution provider",
  profession: "Software Engineer"
 };

 Profile.propTypes = {
 numberProp: PropTypes.number,
 stringProp: PropTypes.string
 }

 console.log(Profile.propTypes);

export default Profile