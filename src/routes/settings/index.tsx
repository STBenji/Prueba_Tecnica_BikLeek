import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/')({
  component: () => <div>Hello /dashboard/settings/!</div>
})