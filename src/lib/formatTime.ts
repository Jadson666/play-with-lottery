import { DateTime } from 'luxon'

export const formatTime = (
  target: DateTime | null,
  current: DateTime | null
): string => {
  if (!target || !current) return '00:00'
  if (target <= current) return '00:00'
  return target.diff(current, ['minutes', 'seconds']).toFormat('mm:ss')
}
