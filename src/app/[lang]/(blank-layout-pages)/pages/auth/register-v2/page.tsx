// Component Imports
import RegisterV2 from '@views/pages/auth/RegisterV2'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const RegisterV2Page = () => {
  // Vars
  const mode = getServerMode()

  return <RegisterV2 mode={mode} />
}

export default RegisterV2Page
