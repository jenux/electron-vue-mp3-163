import Config from '../config'

export function showNotification ({
  title = Config.title,
  message,
  icon = '../../static/images/icon.ico',
  ...opts
}) {
  return new Notification(title, {
    body: message,
    icon,
    ...opts
  })
}
