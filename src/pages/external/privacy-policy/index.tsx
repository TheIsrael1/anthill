const PrivacyPolicy = () => {
  return (
    <main className='container px-container-base lg:px-container-lg mt-[2.625rem] '>
      <div className='flex flex-col mx-auto lg:max-w-[80%]'>
        <h1 className='font-[600] md:font-[500] text-[16px] md:text-[24px] leading-[20px] md:leading-[24px] tracking-[0.15px] text-primary-8 text-center mb-8'>
          The Nollywood Filmmaker Privacy Policy.
        </h1>
        <p className='text-primary-9/[0.87] text-[14px] md:text-base mb-8'>
          This Privacy Policy governs the manner in which The Nollywood Filmmaker ("we," "us," or
          "our") collects, uses, maintains, and discloses information collected from users ("User"
          or "you") of our NWFM web application ("WebApp"). This Privacy Policy applies to the
          WebApp and all products and services offered by us.
        </p>
        <ol className='list-decimal text-primary-9/[0.87] text-[14px] md:text-base mb-12'>
          <li className='list-item mb-4'>
            <h4 className='font-bold mb-2'>Information we collect </h4>
            <ol className='ml-4 list-[lower-alpha]' type='a'>
              <li className='list-item mb-2'>
                <h4 className='font-bold'>Personally identifiable information (PII) </h4>
                <p>When you use our WebApp, we may collect the following PII from you:</p>
                <ul className='list-disc ml-8'>
                  {[
                    'Full name',
                    'Email address',
                    'Contact information (e.g., phone number, address)',
                    'Membership details (e.g., username, password, membership level)',
                  ]?.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              </li>
              <li className='list-item'>
                <h4 className='font-bold'>Non-personally identifiable information (non-PII)</h4>
                <p>
                  We may also collect non-PII about Users whenever they interact with our WebApp.
                  Non-PII may include the browser name, the type of device used, the operating
                  system, and other technical information.
                </p>
              </li>
            </ol>
          </li>
          <li className='list-item mb-4'>
            <h4 className='font-bold mb-2'>How we use collected information. </h4>
            <p>We may collect and use Users' information for the following purposes:</p>
            <ul className='list-disc ml-8'>
              {[
                `To provide and personalize our services: We may use your information to
                deliver the services you requested, personalize your user experience, and
                improve the functionality of our WebApp.`,
                `To send periodic emails: We may use your email address to send you
                information and updates related to your membership, respond to your
                inquiries, and provide you with news or promotional content.`,
              ]?.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </li>
          {(
            [
              {
                title: `How we protect your information`,
                body: `We adopt appropriate data collection, storage, and processing practices, as well
            as security measures, to protect against unauthorized access, alteration,
            disclosure, or destruction of your personal information, username, password,
            transaction information, and data stored on our WebApp.
            However, it is imperative to note that that no method of transmission over the
            Internet, or method of electronic storage is 100% secure and reliable. In light of
            this, we cannot guarantee absolute security.`,
              },
              {
                title: `Sharing your personal information `,
                body: `We do not sell, trade, or rent Users' PII to others. We may share generic
              aggregated demographic information not linked to any PII regarding Users with
              our business partners, trusted affiliates, and advertisers for the purposes outlined
              above`,
              },
              {
                title: `Service Providers `,
                body: `We may engage third-party companies and individuals ("Service Providers") to
              facilitate our WebApp, provide specific services on our behalf, perform tasks
              related to maintenance or improvement of the WebApp, or assist us in analyzing
              how our WebApp is used.
              These Service Providers may have access to Users' personal information solely
              for the purpose of performing their assigned tasks on our behalf. However, they
              are obligated not to disclose or use the information for any other purpose.
              We take reasonable measures to ensure that our Service Providers are
              trustworthy and adhere to strict confidentiality and data protection standards.
              However, we cannot guarantee the actions or practices of third-party Service
              Providers, as they operate independently from us. Therefore, we encourage
              Users to review the privacy policies and practices of these Service Providers to
              understand how they handle personal information.
              By using our WebApp, you acknowledge and agree that we may engage the
              services of third-party Service Providers and that your personal information may
              be shared with them as necessary to provide the requested services and improve
              our WebApp's functionality.`,
              },
              {
                title: `Cookies `,
                body: `Our WebApp may use "cookies" to enhance User experience and provide
              personalized services. A cookie is a small text file that is stored on a User's device
              for record-keeping purposes. It enables us to remember User preferences and
              gather information about their interactions with our WebApp. Cookies may also
              be used by our third-party service providers for analytics and advertising
              purposes. By using our WebApp, you consent to the use of cookies in
              accordance with this Privacy Policy. You have the option to disable cookies or set
              your device to alert you when cookies are being sent. However, please note that
              disabling cookies may limit certain features and functionalities of our WebApp.`,
              },
              {
                title: `Children’s Privacy `,
                body: `Protecting the privacy of children is of utmost importance to us. Our WebApp is
              not intended for use by individuals under the age of 18 ("Children") without the
              consent and involvement of a parent or guardian. We do not knowingly collect
              personal information from Children without appropriate parental consent. If you
              believe that your Child has provided us with personal information without your
              consent, please contact us immediately, and we will take steps to remove such
              information from our systems.
              We encourage parents and guardians to monitor their Children's online activities
              and to help enforce this Privacy Policy by instructing their children to never
              provide personal information through our WebApp or any other website without
              their permission. If you are a parent or guardian and become aware that your
              Child has provided us with personal information, please contact us, and we will
              promptly take the necessary steps to remove that information from our records.
              We are committed to complying with applicable laws and regulations regarding
              Children's privacy`,
              },
              {
                title: `Links to Other Sites`,
                body: `Our WebApp may contain links or references to third-party websites, services, or
              resources that are not controlled or operated by us. We do not endorse or
              assume any responsibility for the privacy practices, content, or actions of these
              third-party sites. We encourage Users to review the privacy policies and terms of
              service of any third-party site they visit through our WebApp. We have no control
              over the collection, use, or disclosure of information by third-party sites and are
              not responsible for any consequences resulting from your interaction with those
              sites. Your use of any third-party site is at your own risk.
              `,
              },
              {
                title: `Compliance with laws`,
                body: `We will disclose your PII to comply with any valid legal process or governmental
              request (e.g., subpoenas, court orders) or to protect our rights and interests.`,
              },
              {
                title: `Changes to this privacy policy`,
                body: `We reserve the right to update or modify this Privacy Policy at any time. When
              we do, we will revise the updated date at the beginning of this page. We
              encourage Users to frequently check this page for any changes and to stay
              informed about how we are helping to protect the personal information we
              collect.`,
              },
              {
                title: `Your acceptance of these terms `,
                body: `By using our WebApp, you signify your acceptance of this Privacy Policy. If you
              do not agree to this policy, please do not use our WebApp. Your continued use
              of the WebApp following the posting of changes to this policy will be deemed
              your acceptance of those changes.`,
              },
              {
                title: `Contacting us `,
                body: `If you have any questions about this Privacy Policy, the practices of our WebApp,
              or your dealings with us, please contact us at [info@nollywoodfilmmaker.com].`,
              },
            ] as { title: string; body: string }[]
          )?.map((i, idx) => (
            <li key={idx} className='list-item mb-4'>
              <h4 className='font-bold mb-2'>{i?.title}</h4>
              <p>{i?.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
