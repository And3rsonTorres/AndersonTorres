import { Link } from "@nextui-org/react";

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
        different needs. EasyNote Audio’s main purpose is to make note taking
        easy and accessible for everyone. Features such as speech to text and
        text to speech can enhance the users experience by allowing hands off
        note taking abilities. This feature can be especially handy if users
        have a disability or simply do not have free hands to take notes. Users
        can also add bullet points to their notes as well as create their own
        to-do list. These features will further enhance the user experience by
        giving them access to different forms of note taking. Whether that’s a
        to-do list or several bullet points.
      </p>
      <h2>Project Results</h2>
      <table className="table-auto shadow shadow-gray-500 ">
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
              Saved notes appear in the Note Manager​ screen. The notes are
              saved and will appear after closing the app. To add notes, click
              the + symbol on the bottom right of the screen. To read all notes
              click the play button. To Delete notes, hold press the note.
            </td>
            <td className="px-4 py-2">
              95% working. Text to speech needs to be adjusted to the missing
              words. Additionally, major bugs were fixed
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">Basic Note Taking </td>
            <td className="px-4 py-2">
              In the note taking fragment, you can type text on the editText and
              this works horizontally and vertically. In order to save the note,
              click save at the bottom right after typing something in your
              notes.
            </td>
            <td className="px-4 py-2">Fully functional</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">Bullet List</td>
            <td className="px-4 py-2">
              While Note Taking, there is a bullet list button above the
              keyboard to enable bullet list mode. Bullet list mode creates a
              bullet point on the start of each new line.
            </td>
            <td className="px-4 py-2">
              Mostly functionally, however it can&apos;t do nested bullets and
              only works on the start of a line.
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">Speech To Text</td>
            <td className="px-4 py-2">
              While Note Taking, there is a speech to text button above the
              keyboard to enable speech to text mode. Speech to text mode allows
              the user to speak their words into the notes page.
            </td>
            <td className="px-4 py-2">
              Mostly functionally because it doesn&apos;t work well with the
              bullet list mode. Also, it would be better if the speech to text
              mode didn&apos;t take up the whole screen, so the user can still
              see the notes.
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">Text to Speech</td>
            <td className="px-4 py-2">
              Able to read words from notes and note manager. This works by
              using android native tts.
            </td>
            <td className="px-4 py-2">
              mostly functional. Will need adjustment for speed and words
              recognition
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">To-Do List</td>
            <td className="px-4 py-2">
              Able to create tasks​ by pressing + symbol at the bottom right of
              the screen. Check the checkbox when complete with a task​. Delete
              and edit tasks by swiping and clicking confirm on the dialog to
              confirm save or deletion.​ Also uses SQL Database to store data so
              tasks are still there after destroying the app.
            </td>
            <td className="px-4 py-2">
              Mostly Functional, sometimes when trying to delete a task, it gets
              stuck on the delete animation if the dialog isn&apos;t clicked on
              when present.
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Project Collaborators</h2>
      <table className="table-auto shadow shadow-gray-500 ">
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
      <Link
        href="https://github.com/And3rsonTorres/EasyNoteAudio/releases/tag/V1"
        isExternal
        className="bg-primary w-full font-semibold py-2 px-4 rounded-xl hover:bg-primary-600 transition-colors hover:-translate-y-1"
      >
        GitHub Release
      </Link>
    </div>
  );
}
