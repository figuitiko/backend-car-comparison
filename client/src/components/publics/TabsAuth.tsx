import { Tabs } from "flowbite-react"
import { HiUserCircle, HiUserAdd } from "react-icons/hi"
import Login from "./Login";
import SignUp from "./SignUp";

const TabsAuth = () => {
  return (
    <div className="h-[493px]">
      <Tabs.Group
      aria-label="Tabs with icons"
      style="underline"
    >
      <Tabs.Item
        active={true}
        title="Sign In"
        icon={HiUserCircle}
      >
        <Login />
      </Tabs.Item>
      <Tabs.Item
        
        title="Sign Up"
        icon={HiUserAdd}
      >
        <SignUp />
      </Tabs.Item>
    </Tabs.Group>
    </div>
    
  )
}

export default TabsAuth