// Component Imports
import ForgotPasswordV2 from '@views/pages/auth/ForgotPasswordV2'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const ForgotPasswordV2Page = () => {
  // Vars
  const mode = getServerMode()

  return <ForgotPasswordV2 mode={mode} />
}

export default ForgotPasswordV2Page
