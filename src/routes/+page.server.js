/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { error } from "@sveltejs/kit";

let userData = null
let stringUserData = ""


export const load = () => {
    return {
        userData: userData,
        stringUserData: JSON.stringify(userData)
    }
}


export const actions = {
  mockScrap: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());

    const linkedinProfileUrl = 'https://www.linkedin.com/in/adrianm1701/';
    const apiUrl = 'https://nubela.co/proxycurl/api/v2/linkedin';
    // const bearerToken = 'NVCegaxDiwqBqDahn3-4Ig';
    const bearerToken = 'Your Mama';

    let mockResponseData = {
      public_identifier: 'adrianm1701',
      profile_pic_url: 'https://s3.us-west-000.backblazeb2.com/proxycurl/person/adrianm1701/profile?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0004d7f56a0400b0000000001%2F20231205%2Fus-west-000%2Fs3%2Faws4_request&X-Amz-Date=20231205T100245Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4c8dd42e57bfade91d41b79ae38a96f1c13b03968e2162ab2b788176a7e3f087',
      background_cover_image_url: 'https://s3.us-west-000.backblazeb2.com/proxycurl/person/adrianm1701/cover?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0004d7f56a0400b0000000001%2F20231205%2Fus-west-000%2Fs3%2Faws4_request&X-Amz-Date=20231205T100245Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=aab064080274a70888672fc1b8522910d665388d686978fe6f85c5518e4fa2fa',
      first_name: 'Adrian',
      last_name: 'Montoya',
      full_name: 'Adrian Montoya',
      follower_count: 185,
      occupation: 'Co-Founder at Aivery',
      headline: 'Co-Founder of Aivery - Building AI Agents for Lead Acquisition and Qualification ',
      summary: 'As a student at TUM, I took the chance to develop broadly in the fields of computer science, aerospace engineering, mathematics and economics; whilst gaining valuable experience through projects such as TUM Hyperloop, Horyzn Aerospace, and my position at Isar Aerospace.\n' +
        '\n' +
        'In addition to my academic pursuits, I sharpened my leadership and communication skills through my work as a math tutor and holding a summary lecture on discrete structures for an audience of hundreds of students. \n' +
        '\n' +
        "Furthermore, I'm passionate about exploring a variety of fields, including music, literature, neurobiology, and psychology. \n" +
        '\n' +
        'Currently, I am venturing into providing AI-powered software solutions independently.',
      country: 'DE',
      country_full_name: 'Germany',
      city: 'Oberschleißheim',
      state: 'Bavaria',
      languages: [
        'Deutsch',
        'Englisch',
        'Französisch',
        'Portugiesisch',
        'Rumänisch',
        'Spanisch'
      ],
      accomplishment_organisations: [],
      accomplishment_publications: [],
      accomplishment_honors_awards: [],
      accomplishment_patents: [],
      accomplishment_courses: [],
      accomplishment_projects: [],
      accomplishment_test_scores: [],
      volunteer_work: [],
      certifications: [],
      connections: null,
      people_also_viewed: [
        {
          link: 'https://www.linkedin.com/in/vanessa-wenisch',
          name: 'Vanessa Wenisch',
          summary: 'Passionate innovator with a tech-driven approach to marketing | track record of leveraging technologies and building strong brands. | TUM.ai batch',
          location: null
        },
        {
          link: 'https://www.linkedin.com/in/vu-nyn',
          name: 'Vu Nguyen',
          summary: 'HR Tech | TUM.ai | AI E-Lab',
          location: null
        },
        {
          link: 'https://www.linkedin.com/in/wllr',
          name: 'Niklas Weller',
          summary: 'University of Edinburgh | TUM',
          location: null
        },
        {
          link: 'https://www.linkedin.com/in/nikitaheumann',
          name: 'Nikita-Tarass H.',
          summary: 'Senior Product Manager @ SIXT | MBA HHL, NYU Stern | TUM.ai',
          location: null
        },
        {
          link: 'https://www.linkedin.com/in/jannis-haberhausen',
          name: 'Jannis Haberhausen',
          summary: 'Robotics and AI/ML Engineer',
          location: null
        },
        {
          link: 'https://www.linkedin.com/in/christian-adumatta-gyampomah-04347914a',
          name: 'Christian Adumatta Gyampomah',
          summary: 'Radar R&D, Kymati GmbH | MS Communications Engineering, TUM | TUM.ai',
          location: null
        },
        {
          link: 'https://www.linkedin.com/in/marie-reiner-3369aa267',
          name: 'Marie Reiner',
          summary: 'Double Majoring @ TUM/LMU | Fraunhofer Quantum Computing | TUM.ai E-Lab',
          location: null
        },
        {
          link: 'https://www.linkedin.com/in/felix-höhne-3123011bb',
          name: 'Felix Höhne',
          summary: 'GNC Engineer',
          location: null
        },
        {
          link: 'https://www.linkedin.com/in/eren-can-yildirim-54b187221',
          name: 'Eren Can  Yildirim',
          summary: 'Technical Sales',
          location: null
        },
        {
          link: 'https://www.linkedin.com/in/sami-mkhazni',
          name: 'Sami Mkhazni',
          summary: 'Writing Code & growing Tomatoes: Software Engineer | Hydroponics',
          location: null
        }
      ],
      recommendations: [],
      activities: [],
      similarly_named_profiles: [
        {
          name: 'Adrian Montoya',
          link: 'https://www.linkedin.com/in/atmontoya',
          summary: 'President and Founder of Moncor Consulting and Business Solutions LLC (a SBA 8(a) certified company)',
          location: 'Albuquerque, NM'
        },
        {
          name: 'Adrian Montoya',
          link: 'https://www.linkedin.com/in/adrian-montoya-54aab21ab',
          summary: 'Regional Vice President at Summit Electric Supply',
          location: 'Albuquerque, NM'
        },
        {
          name: 'Adrian Montoya',
          link: 'https://ca.linkedin.com/in/adrian-montoya-06735b',
          summary: null,
          location: 'Ottawa, ON'
        },
        {
          name: 'Adrian Montoya',
          link: 'https://www.linkedin.com/in/adrian-montoya-a20116102',
          summary: 'Director of Sales at Summit Eleven Inc',
          location: 'Austin, TX'
        },
        {
          name: 'Adrián Montoya',
          link: 'https://mx.linkedin.com/in/adrianmontoya',
          summary: 'Senior Experience Designer',
          location: 'Zapopan, JAL'
        }
      ],
      articles: [],
      groups: [],
      skills: [],
      inferred_salary: null,
      gender: null,
      birth_date: null,
      industry: null,
      extra: null,
      interests: [],
      personal_emails: [],
      personal_numbers: []
    }

    try {
      // const response = await fetch(`${apiUrl}?linkedin_profile_url=${encodeURIComponent(linkedinProfileUrl)}`, {
      //     method: 'GET',
      //     headers: {
      //       'Authorization': `Bearer ${bearerToken}`
      //     }
      //   });

        // const data = await response.json();
        // console.log(data) // works till here
        userData = mockResponseData;
        console.log("Worked")


  } catch (err) {
      console.log("Error: ", err)
      throw error(err.status, err.message)
  }

  },

    mockasfGo: async ({ request }) => {
        // const data = Object.fromEntries(await request.formData());

        let mockResponseData = {
            public_identifier: 'adrianm1701',
            profile_pic_url: 'https://s3.us-west-000.backblazeb2.com/proxycurl/person/adrianm1701/profile?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0004d7f56a0400b0000000001%2F20231205%2Fus-west-000%2Fs3%2Faws4_request&X-Amz-Date=20231205T100245Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4c8dd42e57bfade91d41b79ae38a96f1c13b03968e2162ab2b788176a7e3f087',
            background_cover_image_url: 'https://s3.us-west-000.backblazeb2.com/proxycurl/person/adrianm1701/cover?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0004d7f56a0400b0000000001%2F20231205%2Fus-west-000%2Fs3%2Faws4_request&X-Amz-Date=20231205T100245Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=aab064080274a70888672fc1b8522910d665388d686978fe6f85c5518e4fa2fa',
            first_name: 'Adrian',
            last_name: 'Montoya',
            full_name: 'Adrian Montoya',
            follower_count: 185,
            occupation: 'Co-Founder at Aivery',
            headline: 'Co-Founder of Aivery - Building AI Agents for Lead Acquisition and Qualification ',
            summary: 'As a student at TUM, I took the chance to develop broadly in the fields of computer science, aerospace engineering, mathematics and economics; whilst gaining valuable experience through projects such as TUM Hyperloop, Horyzn Aerospace, and my position at Isar Aerospace.\n' +
              '\n' +
              'In addition to my academic pursuits, I sharpened my leadership and communication skills through my work as a math tutor and holding a summary lecture on discrete structures for an audience of hundreds of students. \n' +
              '\n' +
              "Furthermore, I'm passionate about exploring a variety of fields, including music, literature, neurobiology, and psychology. \n" +
              '\n' +
              'Currently, I am venturing into providing AI-powered software solutions independently.',
            country: 'DE',
            country_full_name: 'Germany',
            city: 'Oberschleißheim',
            state: 'Bavaria',
            languages: [
              'Deutsch',
              'Englisch',
              'Französisch',
              'Portugiesisch',
              'Rumänisch',
              'Spanisch'
            ],
            accomplishment_organisations: [],
            accomplishment_publications: [],
            accomplishment_honors_awards: [],
            accomplishment_patents: [],
            accomplishment_courses: [],
            accomplishment_projects: [],
            accomplishment_test_scores: [],
            volunteer_work: [],
            certifications: [],
            connections: null,
            people_also_viewed: [
              {
                link: 'https://www.linkedin.com/in/vanessa-wenisch',
                name: 'Vanessa Wenisch',
                summary: 'Passionate innovator with a tech-driven approach to marketing | track record of leveraging technologies and building strong brands. | TUM.ai batch',
                location: null
              },
              {
                link: 'https://www.linkedin.com/in/vu-nyn',
                name: 'Vu Nguyen',
                summary: 'HR Tech | TUM.ai | AI E-Lab',
                location: null
              },
              {
                link: 'https://www.linkedin.com/in/wllr',
                name: 'Niklas Weller',
                summary: 'University of Edinburgh | TUM',
                location: null
              },
              {
                link: 'https://www.linkedin.com/in/nikitaheumann',
                name: 'Nikita-Tarass H.',
                summary: 'Senior Product Manager @ SIXT | MBA HHL, NYU Stern | TUM.ai',
                location: null
              },
              {
                link: 'https://www.linkedin.com/in/jannis-haberhausen',
                name: 'Jannis Haberhausen',
                summary: 'Robotics and AI/ML Engineer',
                location: null
              },
              {
                link: 'https://www.linkedin.com/in/christian-adumatta-gyampomah-04347914a',
                name: 'Christian Adumatta Gyampomah',
                summary: 'Radar R&D, Kymati GmbH | MS Communications Engineering, TUM | TUM.ai',
                location: null
              },
              {
                link: 'https://www.linkedin.com/in/marie-reiner-3369aa267',
                name: 'Marie Reiner',
                summary: 'Double Majoring @ TUM/LMU | Fraunhofer Quantum Computing | TUM.ai E-Lab',
                location: null
              },
              {
                link: 'https://www.linkedin.com/in/felix-höhne-3123011bb',
                name: 'Felix Höhne',
                summary: 'GNC Engineer',
                location: null
              },
              {
                link: 'https://www.linkedin.com/in/eren-can-yildirim-54b187221',
                name: 'Eren Can  Yildirim',
                summary: 'Technical Sales',
                location: null
              },
              {
                link: 'https://www.linkedin.com/in/sami-mkhazni',
                name: 'Sami Mkhazni',
                summary: 'Writing Code & growing Tomatoes: Software Engineer | Hydroponics',
                location: null
              }
            ],
            recommendations: [],
            activities: [],
            similarly_named_profiles: [
              {
                name: 'Adrian Montoya',
                link: 'https://www.linkedin.com/in/atmontoya',
                summary: 'President and Founder of Moncor Consulting and Business Solutions LLC (a SBA 8(a) certified company)',
                location: 'Albuquerque, NM'
              },
              {
                name: 'Adrian Montoya',
                link: 'https://www.linkedin.com/in/adrian-montoya-54aab21ab',
                summary: 'Regional Vice President at Summit Electric Supply',
                location: 'Albuquerque, NM'
              },
              {
                name: 'Adrian Montoya',
                link: 'https://ca.linkedin.com/in/adrian-montoya-06735b',
                summary: null,
                location: 'Ottawa, ON'
              },
              {
                name: 'Adrian Montoya',
                link: 'https://www.linkedin.com/in/adrian-montoya-a20116102',
                summary: 'Director of Sales at Summit Eleven Inc',
                location: 'Austin, TX'
              },
              {
                name: 'Adrián Montoya',
                link: 'https://mx.linkedin.com/in/adrianmontoya',
                summary: 'Senior Experience Designer',
                location: 'Zapopan, JAL'
              }
            ],
            articles: [],
            groups: [],
            skills: [],
            inferred_salary: null,
            gender: null,
            birth_date: null,
            industry: null,
            extra: null,
            interests: [],
            personal_emails: [],
            personal_numbers: []
          }

          let mockData = {
            content: "Hiii"
          }
          
        //   return new Response(JSON.stringify(mockResponseData), {
        //     status: 200,
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
        
        // console.log(mockResponseData)
        return mockResponseData
    },

    gdasdo: async ({ request }) => {
        const data = Object.fromEntries(await request.formData());

        const linkedinProfileUrl = 'https://www.linkedin.com/in/adrianm1701/';
        const apiUrl = 'https://nubela.co/proxycurl/api/v2/linkedin';
        // const bearerToken = 'NVCegaxDiwqBqDahn3-4Ig';
        const bearerToken = 'Your Mama';

        try {
            const response = await fetch(`${apiUrl}?linkedin_profile_url=${encodeURIComponent(linkedinProfileUrl)}`, {
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${bearerToken}`
                }
              });

              const data = await response.json();
              console.log(data)

        } catch (err) {
            console.log("Error: ", err)
            throw error(err.status, err.message)
        }
    },
    
}