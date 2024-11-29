import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import dfs from '../images/dfs.png'
import bfs from '../images/bfs.png'

export default function Home() {
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [selectedSubTopic, setSelectedSubTopic] = useState(null);

  const topics = {
    Graphs: ['DFS', 'BFS', 'Shortest Path'],
    Arrays: ['Sorting', 'Searching', 'Two Pointers'],
    LinkedList: ['Singly Linked List', 'Doubly Linked List', 'Circular Linked List'],
    Strings: ['Pattern Matching', 'Substrings', 'Anagrams'],
  };

  const images = {
    DFS: dfs,
    BFS: bfs,
    'Shortest Path': 'https://via.placeholder.com/600x400?text=Shortest+Path+Image',
    Sorting: 'https://via.placeholder.com/600x400?text=Sorting+Image',
    Searching: 'https://via.placeholder.com/600x400?text=Searching+Image',
    'Two Pointers': 'https://via.placeholder.com/600x400?text=Two+Pointers+Image',
    'Singly Linked List': 'https://via.placeholder.com/600x400?text=Singly+Linked+List+Image',
    'Doubly Linked List': 'https://via.placeholder.com/600x400?text=Doubly+Linked+List+Image',
    'Circular Linked List': 'https://via.placeholder.com/600x400?text=Circular+Linked+List+Image',
    'Pattern Matching': 'https://via.placeholder.com/600x400?text=Pattern+Matching+Image',
    Substrings: 'https://via.placeholder.com/600x400?text=Substrings+Image',
    Anagrams: 'https://via.placeholder.com/600x400?text=Anagrams+Image',
  };

  const toggleTopic = (topic) => {
    if (expandedTopic === topic) {
      setExpandedTopic(null); // Collapse if the same topic is clicked again
    } else {
      setExpandedTopic(topic); // Expand the clicked topic
    }
  };

  const handleSubTopicClick = (subTopic) => {
    setSelectedSubTopic(subTopic);
  };

  return (
    <div className='font-inter flex'>
      {/* Sidebar */}
      <aside className='w-64 bg-[#20232a] text-white h-screen p-4'>
        <h2 className='text-lg font-bold mb-4'>Topics</h2>
        <div>
          {Object.keys(topics).map((topic) => (
            <div key={topic} className='mb-2'>
              {/* Topic Button */}
              <button
                className='w-full text-left p-2 bg-[#282c34] hover:bg-[#06bcee] focus:outline-none font-medium'
                onClick={() => toggleTopic(topic)}
              >
                {topic}
              </button>

              {/* Sub-items for each topic */}
              {expandedTopic === topic && (
                <ul className='pl-4 mt-2'>
                  {topics[topic].map((subTopic) => (
                    <li
                      key={subTopic}
                      className='py-1 hover:text-[#06bcee] cursor-pointer'
                      onClick={() => handleSubTopicClick(subTopic)}
                    >
                      {subTopic}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className='flex-1 bg-[#282c34] text-white p-8'>
        <nav className='flex justify-between items-center p-5 bg-[#20232a] shadow-lg'>
          <h1 className='text-2xl font-bold hover:text-[#06bcee] cursor-pointer'>
            CodeVault
          </h1>
          <div className='flex gap-5'>
            <GoogleIcon style={{ fontSize: 30, cursor: 'pointer' }} />
            <GitHubIcon style={{ fontSize: 30, cursor: 'pointer' }} />
          </div>
        </nav>
        <div className='mt-8'>
          {selectedSubTopic && (
            <div className='mt-8'>
              <h2 className='text-xl font-bold mb-4'>Selected Sub-topic: {selectedSubTopic}</h2>
              <img
                src={images[selectedSubTopic]}
                alt={selectedSubTopic}
                className='rounded shadow-lg w-full max-w-2xl'
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
