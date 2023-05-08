import { Label, TextInput, Button } from "flowbite-react"

const SignUp = () => {
  return (
    <form className="flex flex-col gap-4">
      <div>
      <div className="mb-2 block">
        <Label
          htmlFor="fullName1"
          value="your Name"
        />
      </div>
      <TextInput
        id="fullName1"
        type="text"
        placeholder="John Doe"
        required={true}
      />
    </div>
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="emailSignUp1"
          value="Your email"
        />
      </div>
      <TextInput
        id="emailSignUp1"
        type="email"
        placeholder="name@flowbite.com"
        required={true}
      />
    </div>
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="passwordSignUp1"
          value="Your password"
        />
      </div>
      <TextInput
        id="passwordSignUp1"
        type="password"
        required={true}
      />
    </div>
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="repeatPassword1"
          value="Repeat your password"
        />
      </div>
      <TextInput
        id="repeatPassword1"
        type="password"
        required={true}
      />
    </div>
    
    <Button type="submit">
      Submit
    </Button>
  </form>
  )
}

export default SignUp