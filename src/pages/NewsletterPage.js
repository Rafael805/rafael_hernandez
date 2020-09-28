import React from 'react'

const NewsletterPage = () => {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://berkeley.us17.list-manage.com/subscribe/post?u=7241a196f9a2f358a096d353a&amp;id=22874d0164"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <label for="mce-EMAIL">Subscribe</label>
          <input
            type="email"
            value=""
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
          <div aria-hidden="true">
            <input
              type="text"
              name="b_7241a196f9a2f358a096d353a_22874d0164"
              tabindex="-1"
              value=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewsletterPage
