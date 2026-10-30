export default function Skills() {
  const skills = {
    Languages: [
      {
        name: 'C++',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      },
      {
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'SQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'HTML',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
    ],

    Backend: [
      {
        name: 'Node.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Express.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        name: 'RESTful APIs',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      },
    ],

    Frontend: [
      {
        name: 'React.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'EJS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
    ],

    Databases: [
      {
        name: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'MySQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'NeonDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
    ],

    'AI / ML': [
      {
        name: 'ML Algorithms',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'RAG',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'LangChain.js',
      },
      {
        name: 'LLM',
      },
    ],

    Tools: [
      {
        name: 'Git',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'GitHub',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        name: 'VS Code',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      },
      {
        name: 'Postman',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      },
    ],

    'CS Fundamentals': [
      {
        name: 'DSA',
      },
      {
        name: 'OOPs',
      },
      {
        name: 'DBMS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'OS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      },
    ],
  }

  return (
    <>
      <style>{`
        .skills {
          padding: 120px 0;
        }

        .skills__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 70px;
        }

        .skills__description {
          max-width: 420px;
          margin: 0;
          line-height: 1.7;
          opacity: 0.6;
        }

        .skills__content {
          width: 100%;
        }

        .skills__row {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 50px;
          padding: 32px 0;
          border-top: 1px solid rgba(128, 128, 128, 0.2);
        }

        .skills__row:last-child {
          border-bottom: 1px solid rgba(128, 128, 128, 0.2);
        }

        .skills__category {
          padding-top: 8px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          opacity: 0.5;
        }

        .skills__items {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .skill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 10px 15px;
          border: 1px solid rgba(128, 128, 128, 0.2);
          border-radius: 999px;
          font-size: 14px;
          transition: all 0.25s ease;
        }

        .skill__logo {
          width: 19px;
          height: 19px;
          object-fit: contain;
        }

        .skill:hover {
          transform: translateY(-3px);
          border-color: rgba(128, 128, 128, 0.5);
          background: rgba(128, 128, 128, 0.06);
        }

        @media (max-width: 768px) {
          .skills {
            padding: 80px 0;
          }

          .skills__header {
            display: block;
            margin-bottom: 45px;
          }

          .skills__description {
            margin-top: 20px;
          }

          .skills__row {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 28px 0;
          }

          .skills__category {
            padding-top: 0;
          }

          .skills__items {
            gap: 9px;
          }

          .skill {
            padding: 9px 13px;
            font-size: 13px;
          }

          .skill__logo {
            width: 17px;
            height: 17px;
          }
        }
      `}</style>

      <section id="skills" className="skills">
        <div className="section-wrapper">

          <p className="section-label">Skills</p>

          <div className="skills__header">
            <h2 className="section-title">
              Technologies I work with
            </h2>
          </div>

          <div className="skills__content">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skills__row" key={category}>

                <div className="skills__category">
                  {category}
                </div>

                <div className="skills__items">
                  {items.map((skill) => (
                    <div className="skill" key={skill.name}>

                      {skill.logo && (
                        <img
                          src={skill.logo}
                          alt=""
                          className="skill__logo"
                        />
                      )}

                      <span>{skill.name}</span>

                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}