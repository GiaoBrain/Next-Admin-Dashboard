// Component Imports
import LoginV2 from '@views/pages/auth/LoginV2'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const LoginV2Page = () => {
  // Vars
  const mode = getServerMode()

  return <LoginV2 mode={mode} />
}

export default LoginV2Page
