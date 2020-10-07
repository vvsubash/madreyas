import { auth } from 'firebase'
import LogRocket from 'logrocket'
LogRocket.init(process.env.NUXT_ENV_LOGROCKETID)

LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
  name: auth.currentUser.displayName,
  email: auth.currentUser.email,

  // Add your own custom user variables here, ie:
})
