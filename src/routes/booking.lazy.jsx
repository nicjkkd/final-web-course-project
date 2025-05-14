import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/booking')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/booking"!</div>
}
