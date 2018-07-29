<?php

namespace site\models;


use Yii;
use yii\base\Model;

class ModelTerms extends Model {

    public static function getCookies(){
        return [
            [
                'title' => 'General',
                'content' => '
<p>By continuing to use this site you consent to the use of cookies on your device as described in our cookie policy unless you have disabled them. You can change your cookie settings at any time but parts of our site will not function correctly without them.</p>

<p>This Cookies Policy sets out how we, Animite Media, use cookies and similar technologies on our website, https://www.animitemedia.com. We may update this Cookies Policy from time to time in order to keep you fully informed about our latest practices involving cookies and similar technologies on our website. You should check this Cookies Policy each time you visit our website in order to find out whether our use of cookies and similar technologies has changed. The effective date of this Cookies Policy is May 25, 2018 Animite Media uses cookies on https://www.animitemedia.com (the "Service"). By using the Service, you consent to the use of cookies.</p>

<p>Our Cookies Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service, your choices regarding cookies and further information about cookies.</p>
'
            ], [
                'title' => 'What are cookies',
                'content' => '
<p>Cookies are data files that are sent between web servers and web browsers, processor memory or hard drives (clients) to recognize a particular user’s device when the user accesses a website. They are used for a range of different purposes, such as customizing a website for a particular user, helping a user navigate a website, improving that user’s website experience, and storing that user’s preferences and login information.</p>

<p>Cookies can be classified as either ‘session’ or ‘persistent’ cookies. Session cookies are placed on your browser when you access a website and last for as long as you keep your browser open. They expire when you close your browser. Persistent cookies are placed on your computer when you access a website and expire at a fixed point in time or if you manually delete them from your browser, whichever occurs first.</p>

<p>Cookies will be set either by our website domain or by third party domains on our behalf. Cookies set by us on our website domain are referred to as \'first party\' cookies. Cookies set by third party domains, or set on or via our domain on behalf of third parties, are referred to as \'third party\' cookies. Cookies do not usually contain personal information. Cookies may, however, be used in combination with other information to identify you.</p>
'
            ], [
                'title' => 'How Animite Media uses cookies',
                'content' => '<p>When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes: to enable certain functions of the Service, to provide analytics, to store your preferences, to enable advertisements delivery, including behavioral advertising.</p>'
            ], [
                'title' => 'Third-party cookies',
                'content' => '<p>In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.</p>'
            ], [
                'title' => 'Session Cookies',
                'content' => '<p>These allow us to track your actions during a single browser session. These are created temporarily and once you close the browser, all session cookies are deleted.</p>

<p>Analytical/performance cookies - They allow us to recognize and count the number of visitors and to see how visitors move around our Site when they are using it. This helps us to improve the way our Site works, for example, by ensuring that users are finding what they are looking for easily</p>
'
            ], [
                'title' => 'Google Analytics',
                'content' => '<p>Google Analytics uses first-party cookies to track visitors and collect information about how they use our Site.</p>'
            ], [
                'title' => 'Google AdWords',
                'content' => '<p>Our Site uses the Google AdWords remarketing service to advertise on third party sites (including Google) to previous visitors to our Site. It could mean that we advertise to previous visitors who haven’t completed a task on our Site, for example using the contact form to make an inquiry.</p>'
            ], [
                'title' => 'What are your choices regarding cookies',
                'content' => '<p>If you\'d like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.</p>'
            ]
        ];
    }

    public static function getPrivacy(){
        return [
            [
                'title' => '',
                'content' => '
<p>Animite Media operates https://www.animitemedia.com. This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the website.</p>

<p>This Privacy Policy sets out how we, Animite Media, obtain, store and use your personal information when you use or interact with our website, https://www.animitemedia.com, or where we otherwise obtain or collect your personal information. This Privacy Policy is effective from May 25, 2018. Please read this Privacy Policy carefully. We recommend that you print off a copy of this Privacy Policy and any future versions in force from time to time for your records.</p>

<p>We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.</p>'
            ], [
                'title' => 'Information Collection and Use',
                'content' => '
<p>While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name, contact details, IP address, information about your computer.</p>

<p>We retain your personal information for no longer than necessary, taking into account any legal obligations we have (e.g. to maintain records for tax purposes) and any other legal basis we have for using your personal information e.g. your consent, performance of a contract with you or our legitimate interests as a business.</p>

<p>INTERNATIONAL TRANSFER OF DATA The data that we collect from you may be transferred to, stored at or otherwise processed in a destination outside the European Economic Area (“EEA”) By using or participating in any service and/or providing us with your information, you consent to the collection, transfer, storage and processing of your information outside of the EEA. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy</p>
'
            ], [
                'title' => 'Log Data',
                'content' => '
<p>Like many site operators, we collect information that your browser sends whenever you visit our Site (“Log Data”)</p>

<p>This Log Data may include information such as your computer\'s Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>

<p>In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this information.</p>
'
            ], [
                'title' => 'Communications',
                'content' => '<p>We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that you have provided.</p>'
            ], [
                'title' => 'Group companies',
                'content' => '<p>Your information may be shared with any of our group companies</p>'
            ], [
                'title' => 'Cookies',
                'content' => '
<p>Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer\'s hard drive.</p>

<p>Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>
'
            ], [
                'title' => 'Security',
                'content' => '<p>The security of your Personal Information is important to us but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>'
            ], [
                'title' => 'Changes to This Privacy Policy',
                'content' => '
<p>This Privacy Policy is effective as of May 25, 2018 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</p>

<p>We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>

<p>If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.</p>
'
            ], [
                'title' => 'Contact Us',
                'content' => '<p>If you have any questions about this Privacy Policy, please contact us.</p>'
            ]
        ];
    }

    public static function getTerms(){
        return [
            [
                'title' => '',
                'content' => '
<p>Please read these Terms and Conditions carefully before using https://www.animitemedia.com</p>

<p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>

<p><strong>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</strong></p>'
            ], [
                'title' => 'Links to Other Web Sites',
                'content' => '
<p>Our website may contain links to third-party webs ites or services that are not owned or controlled by Animite Media.</p>

<p>Animite Media has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party websites or services. You further acknowledge and agree Animite Media shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>'
            ], [
                'title' => 'Changes',
                'content' => '<p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days\' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>'
            ], [
                'title' => 'Contact Us',
                'content' => '<p>If you have any questions about these Terms, please contact us.</p>'
            ]
        ];
    }

}