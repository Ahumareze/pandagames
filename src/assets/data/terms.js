const terms = [
    {
        label: "Privacy Statement",
        property: "We are committed to protecting your privacy. Authorized employees within the company on a need to know basis only use any information collected from individual customers. We constantly review our systems and data to ensure the best possible service to our customers. We do not sell your personal data to any 3rd party or never will be traded against any value."
    },
    {
        label: "Confidentiality",
        property: "We are registered under the Data Protection Act 1998 and as such, any information concerning the Client and their respective Client Records may be passed to third parties. However, Client records are regarded as confidential and therefore will not be divulged to any third party, other than if legally required to do so to the appropriate authorities. Clients have the right to request sight of, and copies of any and all Client Records we keep, on the proviso that we are given reasonable notice of such a request. Clients are requested to retain copies of any literature issued in relation to the provision of our services. Where appropriate, we shall issue Client’s with appropriate written information, handouts or copies of records as part of an agreed contract, for the benefit of both parties.We will not sell, share, or rent your personal information to any third party or use your e-mail address for unsolicited mail. Any emails sent by this Company will only be in connection with the provision of agreed services."
    },
    {
        label: "Availability",
        property: "Unless otherwise stated, the services featured on this website are only available all over the world. Anyone can join and use the website service instantly with having registered account."
    },
    {
        label: "Log Files",
        property: "We use IP addresses to analyse trends, administer the site, track user’s movement, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information. Additionally, for systems administration, detecting usage patterns and troubleshooting purposes, our web servers automatically log standard access information including browser type, access times/open mail, URL requested, and referral URL. This information is not shared with third parties and is used only within this Company on a need-to-know basis. Any individually identifiable information related to this data will never be used in any way different to that stated above without your explicit permission."
    },
    {
        label: "Cookies",
        property: "Like most interactive web sites this Company’s website uses cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate partners may also use cookies."
    },
    {
        label: "Links to this website",
        property: "You may create a referral link to this website without any claims and also able to receive the referral rewards directly from the website and can add in blog/article/social post/forums by linking your referral to it."
    },
    {
        label: "Links from this website",
        property: "We do not monitor or review the content of other party’s websites which are linked to from this website. Opinions expressed or material appearing on such websites are not necessarily shared or endorsed by us and should not be regarded as the publisher of such opinions or material. Please be aware that we are not responsible for the privacy practices, or content, of these sites. We encourage our users to be aware when they leave our site & to read the privacy statements of these sites. You should evaluate the security and trustworthiness of any other site connected to this site or accessed through this site yourself, before disclosing any personal information to them. This Company will not accept any responsibility for any loss or damage in whatever manner, howsoever caused, resulting from your disclosure to third parties of personal information."
    },
    {
        label: "Copyright Notice",
        property: "Copyright and other relevant intellectual property rights exists on all text relating to the Company’s services and the full content of this website."
    },
    {
        label: "Communication",
        property: "We have several different contact method for different queries. E-mail, & other social information, can be found on our Contact Us link on our website."
    },
    {
        label: "Force Majeure",
        property: "Neither party shall be liable to the other for any failure to perform any obligation under any Agreement which is due to an event beyond the control of such party including but not limited to any Act of God, terrorism, war, Political insurgence, insurrection, riot, civil unrest, act of civil or military authority, uprising, earthquake, flood or any other natural or man made eventuality outside of our control, which causes the termination of an agreement or contract entered into, nor which could have been reasonably foreseen. Any Party affected by such event shall forthwith inform the other Party of the same and shall use all reasonable endeavours to comply with the terms and conditions of any Agreement contained herein."
    },
    {
        label: "Waiver",
        property: "Failure of either Party to insist upon strict performance of any provision of this or any Agreement or the failure of either Party to exercise any right or remedy to which it, he or they are entitled hereunder shall not constitute a waiver thereof and shall not cause a diminution of the obligations under this or any Agreement. No waiver of any of the provisions of this or any Agreement shall be effective unless it is expressly stated to be such and signed by both Parties."
    },
    {
        label: "Action against the fraud activity",
        property: "Bitenigma has rights to take actions against the fraud activity. Cheating system for referral commission is major crime we count it seriously in Bitenigma. Bitenigma is kind itself to allow to have multiple accounts in website Bitenigma but it is with a condition that to not cheat the system. If any user found to be cheating with the referral system or representative system by taking referral commission from the same account user own via same IP address, action will be taken within 7 days. Bitenigma clearly informs users about to not having the multiple accounts with the same IP address by any means. The cheating referral system is not counted as a fair deal for any amount of deposit in which the user takes the referral commission that can be the withdraw amount for our other users.The user will have to bear the penalty for this action and account will be held suspend for the 15 days."
    },
    {
        label: "General",
        property: "The laws of US govern these terms and conditions. By accessing this website [and using our services] you consent to these terms and conditions and to the exclusive jurisdiction of the British courts in all disputes arising out of such access. If any of these terms are deemed invalid or unenforceable for any reason (including, but not limited to the exclusions and limitations set out above), then the invalid or unenforceable provision will be severed from these terms and the remaining terms will continue to apply. Failure of the Company to enforce any of the provisions set out in these Terms and Conditions and any Agreement, or failure to exercise any option to terminate, shall not be construed as waiver of such provisions and shall not affect the validity of these Terms and Conditions or of any Agreement or any part thereof, or the right thereafter to enforce each and every provision. These Terms and Conditions shall not be amended, modified, varied or supplemented except in writing and signed by duly authorised representatives of the Company."
    },
    {
        label: "Notification of Changes",
        property: "The Company reserves the right to change these conditions from time to time as it sees fit and your continued use of the site will signify your acceptance of any adjustment to these terms. If there are any changes to our privacy policy, we will announce that these changes have been made on our home page and on other key pages on our site. If there are any changes in how we use our site customers’ Personally Identifiable Information, notification by e-mail or postal mail will be made to those affected by this change. Any changes to our privacy policy will be posted on our web site 7 days prior to these changes taking place. You are therefore advised to re-read this statement on a regular basis"
    },
    {
        label: "Withdrawal",
        property: "Note: To process your pending withdrawal 30% tax is to be charged on profit. Capital allowance of 25% is given to professional investors, while all other categories of investors pay the general tax or profit (30%) as stated in the terms and conditions. Contact the admins for more informations."
    },
    {
        label: "Referral Bonus",
        property: "Invite your family and friends to Apex corp Investment and receive $5 instantly. Each member has a unique Apex corp Investment referral code  to share with family and friends and receive 5% of your referral capital. If any one signs up with your referral code, he or she will be added to your referral program. Your referral code can be used to invite as many users as possible."
    },
    {
        label: "",
        property: "Invite your family and friends to Apex corp Investment and earn $5 instantly and more percentage referral bonuses according to the plan made by your referee, "
    }
];

export default terms;