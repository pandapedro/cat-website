import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu } from 'antd'
import { BorderOutlined, CheckSquareOutlined } from '@ant-design/icons'

export default function YourComponent() {
  const router = useRouter()

  const selectedLang = lang => {
    return router.locale === lang ? <CheckSquareOutlined /> : <BorderOutlined />
  }

  return (
    <Menu onClick={handleLangMenuClick}>
      <Menu.Item key="en-US" icon={selectedLang('en-US')}>
        <Link href={router.pathname} locale="en-US" >
          <a>English</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="en-US" icon={selectedLang('pt-BR')}>
        <Link href={router.pathname} locale="pt-BR" >
          <a>Português</a>
        </Link>
      </Menu.Item>
    </Menu>
  )
}
