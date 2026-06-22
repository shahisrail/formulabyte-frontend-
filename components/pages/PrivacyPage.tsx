'use client';

import React from 'react';
import PageBehavior from '@/components/runtime/PageBehavior';

export default function PrivacyPage() {
  return (
    <>
      <PageBehavior page="privacy" />

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-pill">
            <span className="tag">Privacy</span>
            <span className="live-dot"></span>
            <span>Last updated June 08, 2026</span>
          </div>
          <h1>
            {"Privacy "}
            <span className="accent">Policy</span>
          </h1>
          <p className="lede">
            {"Learn how Formula Byte collects, uses, and protects your personal information. Your privacy is our priority."}
          </p>
        </div>
      </section>

      <div className="section-wrap">
        <section className="card">
          <div className="row-stacked">
            <div className="row-header">
              <div className="eyebrow">Privacy</div>
              <h2>
                {"Privacy "}
                <span className="serif-accent">Policy</span>
              </h2>
              <p className="intro">Learn how Formula Byte collects, uses, and protects your personal information. Your privacy is our priority.</p>
              <div style={{"marginTop": "12px", "fontSize": "13px", "color": "var(--text-secondary)"}}>
                <span>Last edited on </span>
                <strong>June 08, 2026</strong>
              </div>
            </div>

            <div className="row-body">
              <div className="faq-list">
                <details className="faq-item" open>
                  <summary className="faq-q">Introduction & Summary</summary>
                  <div className="faq-a">
                    <p>This privacy notice for <strong>INFLOWEN LTD</strong> (doing business as Formula Byte) ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:</p>
                    <ul>
                      <li>Visit our website at https://www.formulabyte.com, or any website of ours that links to this privacy notice</li>
                      <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                    </ul>
                    <p>Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:hello@formulabyte.com">hello@formulabyte.com</a>.</p>

                    <p><strong>Summary of Key Points:</strong></p>
                    <ul>
                      <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</li>
                      <li><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</li>
                      <li><strong>Do we receive any information from third parties?</strong> We do not receive any information from third parties.</li>
                      <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</li>
                      <li><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</li>
                      <li><strong>How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.</li>
                      <li><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</li>
                      <li><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</li>
                    </ul>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-q">1. WHAT INFORMATION DO WE COLLECT?</summary>
                  <div className="faq-a">
                    <p><strong>In Short:</strong> We collect personal information that you provide to us.</p>
                    <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>

                    <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                    <ul>
                      <li>email addresses</li>
                      <li>names</li>
                      <li>passwords</li>
                      <li>debit/credit card numbers</li>
                      <li>billing addresses</li>
                      <li>phone numbers</li>
                    </ul>

                    <p>We securely store the data uploaded by users to our platform within hostinger VPS web server, ensuring its confidentiality and integrity. users have the option to delete their data at any point, inclusive of both the data uploaded and chat messages. Like chatgpt, your data and chats may be sent to openai to be used for model training purposes.</p>

                    <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>

                    <p><strong>Payment Data.</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is stored by Stripe. You may find their privacy notice link(s) here: <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">https://stripe.com/privacy</a>.</p>

                    <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

                    <p><strong>Information automatically collected</strong></p>
                    <p><strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
                    <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use the Services, and other technical information. This information is primarily needed to maintain the security and operation of the Services, and for our internal analytics and reporting purposes.</p>

                    <p>Like many businesses, we also collect information through cookies and similar technologies.</p>

                    <p>The information we collect includes:</p>
                    <ul>
                      <li><strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
                      <li><strong>Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
                    </ul>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-q">2. HOW DO WE PROCESS YOUR INFORMATION?</summary>
                  <div className="faq-a">
                    <p><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
                    <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
                    <ul>
                      <li>To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
                      <li>To request feedback. We may process your information when necessary to request feedback and to contact you about your use of the Services.</li>
                      <li>To send you marketing and promotional communications. We may process the personal information you send us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time.</li>
                    </ul>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-q">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</summary>
                  <div className="faq-a">
                    <p><strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</p>
                    <p>If you are located in the EU or UK, this section applies to you.</p>
                    <p>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
                    <ul>
                      <li><strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent.</li>
                      <li><strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms.</li>
                      <li><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations.</li>
                      <li><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
                    </ul>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-q">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</summary>
                  <div className="faq-a">
                    <p><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</p>
                    <p>We may need to share your personal information in the following situations:</p>
                    <ul>
                      <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                    </ul>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-q">5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</summary>
                  <div className="faq-a">
                    <p><strong>In Short:</strong> We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise on our Services, but are not affiliated with, our Services.</p>
                    <p>The Services may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-q">6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</summary>
                  <div className="faq-a">
                    <p><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</p>
                    <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-q">7. HOW LONG DO WE KEEP YOUR INFORMATION?</summary>
                  <div className="faq-a">
                    <p><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>
                    <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us to keep your personal information for longer than the period of time in which users have an account with us.</p>
                    <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-q">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</summary>
                  <div className="faq-a">
                    <p><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</p>
                    <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-q">9. WHAT ARE YOUR PRIVACY RIGHTS?</summary>
                  <div className="faq-a">
                    <p><strong>In Short:</strong> In some regions, such as the EEA, UK, and Switzerland, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</p>
                    <p>In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.</p>

                    <p>We will consider and act upon any request in accordance with applicable data protection laws.</p>

                    <p><strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.</p>

                    <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>

                    <p><strong>Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</p>

                    <p><strong>Account Information</strong> If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
                    <ul>
                      <li>Log in to your account settings and update your user account.</li>
                      <li>Contact us using the contact information provided.</li>
                    </ul>
                    <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>

                    <p><strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. You may also opt out of interest-based advertising by advertisers on our Services.</p>

                    <p>If you have questions or comments about your privacy rights, you may email us at <a href="mailto:hello@formulabyte.com">hello@formulabyte.com</a>.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-q">10. CONTROLS FOR DO-NOT-TRACK FEATURES</summary>
                  <div className="faq-a">
                    <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-q">11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</summary>
                  <div className="faq-a">
                    <p><strong>In Short:</strong> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
                    <p>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>

                    <p>If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).</p>

                    <p><strong>Your rights with respect to your personal data</strong></p>
                    <ul>
                      <li><strong>Right to request deletion of the data — Request to delete</strong> You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law.</li>
                      <li><strong>Right to be informed — Request to know</strong> Depending on the circumstances, you have a right to know: whether we collect and use your personal information; the categories of personal information that we collect; the purposes for which the collected personal information is used; whether we sell or share personal information to third parties; the categories of personal information that we sold, shared, or disclosed for a business purpose; the categories of third parties to whom the personal information was sold, shared, or disclosed for a business purpose; the business or commercial purpose for collecting, selling, or sharing personal information; and the specific pieces of personal information we collected about you.</li>
                      <li><strong>Right to Non-Discrimination for the Exercise of a Consumer's Privacy Rights</strong> We will not discriminate against you if you exercise your privacy rights.</li>
                      <li><strong>Right to Limit Use and Disclosure of Sensitive Personal Information</strong> We do not process consumer's sensitive personal information.</li>
                    </ul>

                    <p>To exercise these rights, you can contact us by email at <a href="mailto:hello@formulabyte.com">hello@formulabyte.com</a>, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-q">12. DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</summary>
                  <div className="faq-a">
                    <p><strong>In Short:</strong> Yes, if you are a resident of Virginia, you may be granted specific rights regarding access to and use of your personal information.</p>

                    <p><strong>Virginia CDPA Privacy Notice</strong></p>
                    <p>Under the Virginia Consumer Data Protection Act (CDPA):</p>
                    <ul>
                      <li>"Consumer" means a natural person who is a resident of the Commonwealth acting only in an individual or household context. It does not include a natural person acting in a commercial or employment context.</li>
                      <li>"Personal data" means any information that is linked or reasonably linkable to an identified or identifiable natural person. "Personal data" does not include de-identified data or publicly available information.</li>
                      <li>"Sale of personal data" means the exchange of personal data for monetary consideration.</li>
                    </ul>

                    <p><strong>Your rights with respect to your personal data</strong></p>
                    <ul>
                      <li>Right to be informed whether or not we are processing your personal data</li>
                      <li>Right to access your personal data</li>
                      <li>Right to correct inaccuracies in your personal data</li>
                      <li>Right to request deletion of your personal data</li>
                      <li>Right to obtain a copy of the personal data you previously shared with us</li>
                      <li>Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
                    </ul>

                    <p>We have not sold any personal data to third parties for business or commercial purposes. We will not sell personal data in the future belonging to website visitors, users, and other consumers.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-q">13. DO WE MAKE UPDATES TO THIS NOTICE?</summary>
                  <div className="faq-a">
                    <p><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
                    <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-q">14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</summary>
                  <div className="faq-a">
                    <p>If you have questions or comments about this notice, you may email us at <a href="mailto:hello@formulabyte.com">hello@formulabyte.com</a> or contact us by post at:</p>
                    <p><strong>INFLOWEN LTD</strong><br/>United Kingdom</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-q">15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</summary>
                  <div className="faq-a">
                    <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-q">16. DATA PRIVACY & SECURITY</summary>
                  <div className="faq-a">
                    <p>Formula Byte utilizes enterprise-grade best practices to protect our customers' data. We take our data privacy and security obligations seriously. Our platform, processes, and systems are designed to protect our users and their data. We have implemented information security controls in every part of our operations and we are consistently working to strengthen our stance.</p>

                    <p>Formula Byte builds on infrastructure with Hostinger VPS Server, OpenAI and Javascripts frameworks, which provide industry-leading security, privacy, operation monitoring, and compliance.</p>

                    <p>This Data Privacy Policy outlines the measures we take to safeguard your data and explains how we collect, use, share, and protect the information you provide us. By using our services, you agree to the terms of this Data Privacy Policy.</p>

                    <p><strong>Data Security</strong><br/>
                    We take the security of your User-Uploaded Data seriously. We implement appropriate technical, administrative, and physical safeguards to protect your data from unauthorized access, disclosure, alteration, or destruction. These measures include but are not limited to access controls, data backup procedures, and regular security assessments. Data uploaded to the Data Analyzer is protected by encryption at the storage layer using the Advanced Encryption Standard (AES) algorithm, AES-256. However, no system is 100% secure, hence we can not guarantee the protection of your data.</p>

                    <p><strong>Data Retention</strong><br/>
                    We will retain your User-Uploaded Data only for as long as necessary to fulfill the purposes for which it was collected or as required by applicable laws and regulations. Upon your request or termination of your account, we will delete or anonymize your User-Uploaded Data unless retention is necessary to comply with legal obligations. Files uploaded and conversations can be deleted by the user at any point.</p>

                    <p><strong>Data Sharing and Disclosure</strong><br/>
                    We will not sell, rent, trade, or otherwise share your User-Uploaded Data with third parties for marketing purposes without your explicit consent. In order to enhance the functionality and user experience of our app, we share files uploaded via Data Analyzer and all inputs/prompts with OpenAI. This data is used solely for the purpose of generating relevant code/outputs and is not used for any other purposes. The data uploaded to OpenAI is aggregated and anonymized and is NOT used to train the AI model.</p>

                    <p><strong>OpenAI's API data policy</strong><br/>
                    Our main service provider, OpenAI, mirrors our dedication to data security. OpenAI employs best-in-class technical protections and maintains robust encryption for data security in transit. Below, you'll find more about how OpenAI's security measures work to protect your information.</p>

                    <p>OpenAI will not use data submitted via their API to train or improve their models. Any data sent through to OpenAI via their API will be retained for abuse and misuse monitoring purposes for a maximum of 30 days, after which it will be deleted (unless otherwise required by law). The OpenAI API is SOC 2 Type 2 compliant and has been audited by an independent third-party auditor against the 2017 Trust Services Criteria for Security.</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="final-cta-wrap">
        <section className="final-cta">
          <div className="final-cta-inner">
            <h2>
              {"Questions about our "}
              <span className="accent">privacy practices?</span>
            </h2>
            <p>{"If you have any questions about how we handle your data, please contact our support team."}</p>
            <div className="btn-row">
              <a href="/contact" className="btn btn-primary btn-lg">{"Contact us →"}</a>
              <a href="/terms" className="btn btn-outline btn-lg">{"View Terms & Conditions"}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}