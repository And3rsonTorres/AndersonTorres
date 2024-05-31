/**
 * Renders the EasyNoteAudio page, which provides information about the project&apos;s mission, background, results, lessons learned, and collaborators.
 *
 * The page includes the following sections:
 * - Mission Statement: Describes the app&apos;s purpose of making notetaking convenient and accessible with features like speech-to-text and text-to-speech.
 * - Project Information and Background: Explains how the app is designed to be helpful for a diverse group of users with different needs.
 * - Project Results: Provides a table with details on the app&apos;s various features and their current status.
 * - Lessons Learned: Includes a table with insights gained during the project, such as the importance of effective communication, planning, and setting realistic expectations.
 * - Project Collaborators: Lists the team members and their roles, with links to their GitHub and LinkedIn profiles.
 * - GitHub Release: Provides a link to the project&apos;s latest GitHub release.
 */
import { Link } from "@nextui-org/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EasyNoteAudio",
};
export default function EasyNoteAudio() {
  return (
    <div className="prose lg:prose-xl text-center m-auto dark:prose-invert">
      <h1>EasyNoteAudio</h1>
      <h2>Mission Statement</h2>
      <p>
        Our mission is to develop an app that makes notetaking convenient and
        simple. We want to create an app that is accessible to people therefore
        we have features such as speech-to-text and text-to-speech so the user
        can take and listen to notes mostly hand-free. We also value
        organization, so users can create and name multiple notes all in one
        place.
      </p>
      <h2>Project Information and Background</h2>
      <p>
        Our app is designed to be of help for a diverse group of people with
        different needs. EasyNote Audio&apos;s main purpose is to make note
        taking easy and accessible for everyone. Features such as speech to text
        and text to speech can enhance the users experience by allowing hands
        off note taking abilities. This feature can be especially handy if users
        have a disability or simply do not have free hands to take notes. Users
        can also add bullet points to their notes as well as create their own
        to-do list. These features will further enhance the user experience by
        giving them access to different forms of note taking. Whether
        that&apos;s a to-do list or several bullet points.
      </p>
      <h2>Project Results</h2>
      <table className="table-auto  rounded-lg shadow shadow-gray-500 ">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">Note Managing Screen</td>
            <td className="px-4 py-2">
              <p>
                {" "}
                Saved notes appear in the Note Manager​ screen. The notes are
                saved and will appear after closing the app. To add notes, click
                the + symbol on the bottom right of the screen. To read all
                notes click the play button. To Delete notes, hold press the
                note.
              </p>
            </td>
            <td className="px-4 py-2">
              <p>
                95% working. Text to speech needs to be adjusted to the missing
                words. Additionally, major bugs were fixed
              </p>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">Basic Note Taking </td>
            <td className="px-4 py-2">
              <p>
                In the note taking fragment, you can type text on the editText
                and this works horizontally and vertically. In order to save the
                note, click save at the bottom right after typing something in
                your notes.
              </p>
            </td>
            <td className="px-4 py-2">Fully functional</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">Bullet List</td>
            <td className="px-4 py-2">
              <p>
                While Note Taking, there is a bullet list button above the
                keyboard to enable bullet list mode. Bullet list mode creates a
                bullet point on the start of each new line.
              </p>
            </td>
            <td className="px-4 py-2">
              <p>
                Mostly functionally, however it can&apos;t do nested bullets and
                only works on the start of a line.
              </p>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">Speech To Text</td>
            <td className="px-4 py-2">
              <p>
                While Note Taking, there is a speech to text button above the
                keyboard to enable speech to text mode. Speech to text mode
                allows the user to speak their words into the notes page.
              </p>
            </td>
            <td className="px-4 py-2">
              <p>
                Mostly functionally because it doesn&apos;t work well with the
                bullet list mode. Also, it would be better if the speech to text
                mode didn&apos;t take up the whole screen, so the user can still
                see the notes.
              </p>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">Text to Speech</td>
            <td className="px-4 py-2">
              <p>
                Able to read words from notes and note manager. This works by
                using android native tts.
              </p>
            </td>
            <td className="px-4 py-2">
              <p>
                mostly functional. Will need adjustment for speed and words
                recognition
              </p>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">To-Do List</td>
            <td className="px-4 py-2">
              <p>
                Able to create tasks​ by pressing + symbol at the bottom right
                of the screen. Check the checkbox when complete with a task​.
                Delete and edit tasks by swiping and clicking confirm on the
                dialog to confirm save or deletion.​ Also uses SQL Database to
                store data so tasks are still there after destroying the app.
              </p>
            </td>
            <td className="px-4 py-2">
              <p>
                Mostly Functional, sometimes when trying to delete a task, it
                gets stuck on the delete animation if the dialog isn&apos;t
                clicked on when present.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Lessons Learned</h2>
      <table className="table-auto rounded-lg shadow shadow-gray-500 ">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="px-4 py-2">Tittle</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">Meetings</td>
            <td className="px-4 py-2">
              <p>
                {" "}
                Meetings are essential for effective communication and
                collaboration within a team or organization. They provide a
                platform for team members to share ideas, discuss progress, and
                make decisions. By allocating sufficient time for debugging and
                recognizing that perfection is not attainable on the first
                attempt, meetings can facilitate the completion of tasks within
                a reasonable timeframe while allowing for necessary revisions
                and adjustments.
              </p>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">Planning</td>
            <td className="px-4 py-2">
              <p>
                It is a good idea to have frequent meetings to know what each
                person is working on and discuss the structure of the program
                which can make things easier in the coding processPlanning is
                crucial in any undertaking, as it helps set clear goals,
                allocate resources effectively, and anticipate potential
                challenges. It provides a roadmap for the project, ensuring that
                everyone involved is aware of their tasks and the overall
                direction. Clear planning can reduce errors, minimize time
                wastage, and streamline the coding process, making it more
                efficient and productive.
              </p>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">Expectations</td>
            <td className="px-4 py-2">
              <p>
                It is best to set goals but also have more realistic goals for
                the given set of skills and amount of time allocated for the
                project. Expectations play a crucial role in shaping our
                experiences and outcomes. When we have realistic expectations,
                we set ourselves up for success and avoid disappointment. In the
                context of setting goals, it is important to have both ambitious
                goals and more realistic ones. Ambitious goals can motivate us
                to strive for excellence, while realistic goals help us stay
                grounded and focused on what is achievable. By setting realistic
                expectations, we can increase our chances of success and
                maintain a positive outlook even in the face of challenges.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Project Collaborators</h2>
      <table className="table-auto rounded-lg shadow shadow-gray-500 ">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">GitHub</th>
            <th className="px-4 py-2">LinkedIn</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">Anderson Torres</td>
            <td className="px-4 py-2">UI/UX,QA</td>
            <td className="px-4 py-2">
              <Link
                href="https://github.com/And3rsonTorres"
                aria-label="GitHub"
                isExternal
              >
                Github
              </Link>
            </td>
            <td className="px-4 py-2">
              <Link
                href="https://www.linkedin.com/in/elnito"
                aria-label="LinkedIn"
                isExternal
              >
                LindkedIn
              </Link>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">Arthur Rosa</td>
            <td className="px-4 py-2">Team Lead</td>
            <td className="px-4 py-2">
              <Link
                href="https://github.com/ArthurRosa01898431"
                aria-label="GitHub"
                isExternal
              >
                Github
              </Link>
            </td>
            <td className="px-4 py-2">
              <Link
                href="https://www.linkedin.com/in/arthur-rosa-59185a1ba/"
                aria-label="LinkedIn"
                isExternal
              >
                LindkedIn
              </Link>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">Tashia Boddu </td>
            <td className="px-4 py-2">UI,DB</td>
            <td className="px-4 py-2">
              <Link
                href="https://github.com/Tashia0705"
                aria-label="GitHub"
                isExternal
              >
                Github
              </Link>
            </td>
            <td className="px-4 py-2">
              <Link
                href="https://www.linkedin.com/in/tashia-boddu-168786211/"
                aria-label="LinkedIn"
                isExternal
              >
                LindkedIn
              </Link>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="justify-evenly-spaced flex flex-row gap-2">
        <Link
          href="https://github.com/And3rsonTorres/EasyNoteAudio"
          aria-label="EasyNoteeAudio GitHub Repository"
          isExternal
          className="bg-primary w-full font-semibold py-2 px-4 rounded-xl hover:bg-primary-600 transition-colors hover:-translate-y-1"
        >
          Explore the project and contribute on GitHub.
        </Link>
        <Link
          href="https://github.com/And3rsonTorres/EasyNoteAudio/releases/tag/V1"
          isExternal
          className="bg-primary w-full font-semibold py-2 px-4 rounded-xl hover:bg-primary-600 transition-colors hover:-translate-y-1"
        >
          GitHub Release
        </Link>
      </div>
    </div>
  );
}
