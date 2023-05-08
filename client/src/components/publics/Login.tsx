import { Label, TextInput,  Button } from "flowbite-react"
import useLogin from "../../hooks/useLogin";



const Login = () => {

  const {form,updateForm, handleLogin} = useLogin();

  return (
    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="Your email"
      />
    </div>
    <TextInput
      id="email1"
      type="email"
      placeholder="name@flowbite.com"
      required={true}
      onChange={(e) => updateForm({...form, email: e.target.value})}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
      id="password1"
      type="password"
      required={true}
      onChange={(e) => updateForm({...form, password: e.target.value})}
    />
  </div>  
  <Button type="submit">
    Submit
  </Button>
</form>
  )
}

export default Login