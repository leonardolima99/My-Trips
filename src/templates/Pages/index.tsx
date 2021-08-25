import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'
import { NextSeo } from 'next-seo'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <NextSeo
      title={`${heading} - My Trips`}
      description={
        body ||
        'A simple project to show in a map the places that  I went and show more informations and photos when clicked.'
      }
      canonical="https://my-trips-gilt.vercel.app"
      openGraph={{
        url: 'https://my-trips-gilt.vercel.app',
        title: `${heading} - My Trips`,
        description:
          body ||
          'A simple project to show in a map the places that  I went and show more informations and photos when clicked.',
        images: [
          {
            url: 'https://my-trips-gilt.vercel.app/img/cover.png',
            width: 1280,
            height: 720,
            alt: `${heading} - My Trips`
          }
        ]
      }}
    />
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>{heading}</S.Heading>
    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
)

export default PageTemplate
