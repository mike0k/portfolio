import { redirect } from 'next/navigation';

import Config from '../../config/Config';

export default async function Resume() {
    redirect(Config.url.cv ? Config.url.cv : '/');
}
