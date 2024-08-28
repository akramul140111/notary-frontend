import Logo from '@/app/assets/appImage/my-gov.png'
import Image from 'next/image'
const ApplicationLogo = () => <Image src={Logo} alt="Logo" loading='lazy' quality={70} />

export default ApplicationLogo
