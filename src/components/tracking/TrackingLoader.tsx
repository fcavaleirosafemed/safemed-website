import { getPayload } from 'payload'
import config from '@payload-config'
import { TrackingScripts } from './TrackingScripts'

/**
 * Server component that reads tracking IDs from Payload CMS
 * and passes them to the client-side TrackingScripts component.
 */
export async function TrackingLoader() {
  let trackingConfig = {
    gtmId: null as string | null,
    gaId: null as string | null,
    hubspotId: null as string | null,
  }

  try {
    const payload = await getPayload({ config })
    const settings = await payload.findGlobal({ slug: 'site-settings' })
    const tracking = (settings as any)?.tracking

    if (tracking) {
      trackingConfig = {
        gtmId: tracking.gtmId || null,
        gaId: tracking.gaId || null,
        hubspotId: tracking.hubspotId || null,
      }
    }
  } catch {
    // CMS unavailable — no tracking scripts loaded
  }

  return <TrackingScripts {...trackingConfig} />
}
