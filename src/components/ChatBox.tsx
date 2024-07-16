import React, { useState, useEffect, ChangeEvent, KeyboardEvent, useRef } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  IconButton,
  Fab,
  Avatar,
  CircularProgress,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

const ahmerai = "../images/ahmerai.png";
const visitor = "../images/visitor.png";

interface Message {
  sender: "user" | "bot" | "system";
  text: string;
}

const CACHE_KEY = "chatMessages";
const CACHE_TIMESTAMP_KEY = "chatMessagesTimestamp";
const CACHE_EXPIRATION_DAYS = 7;

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi, I am Ahmer! What would you like to know about me?",
    },
    {
      sender: "bot",
      text: "You can ask questions about my work history, interests, goals, and even my Birkman assessment!",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); 

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem(CACHE_KEY);
    const savedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    if (savedMessages && savedTimestamp) {
      const currentTime = new Date().getTime();
      const cacheTime = new Date(savedTimestamp).getTime();
      const timeDiff = (currentTime - cacheTime) / (1000 * 60 * 60 * 24);
      if (timeDiff < CACHE_EXPIRATION_DAYS) {
        setMessages(JSON.parse(savedMessages));
      } else {
        clearMessages();
      }
    }
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const saveMessagesToLocalStorage = (messages: Message[]) => {
    localStorage.setItem(CACHE_KEY, JSON.stringify(messages));
    localStorage.setItem(CACHE_TIMESTAMP_KEY, new Date().toISOString());
  };

  const clearMessages = () => {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(CACHE_TIMESTAMP_KEY);
    setMessages([
      {
        sender: "bot",
        text: "Hi, I am Ahmer! What would you like to know about me?",
      },
      {
        sender: "bot",
        text: "You can ask questions about my work history, interests, goals, and even my Birkman assessment!",
      },
    ]);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    if (input.trim().toLowerCase() === "clear") {
      clearMessages();
      setInput("");
      return;
    }

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, userMessage];
      saveMessagesToLocalStorage(updatedMessages);
      return updatedMessages;
    });

    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("/api/openai", { userInput: input });
      const botMessage: Message = {
        sender: "bot",
        text: response.data.message,
      };

      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, botMessage];
        saveMessagesToLocalStorage(updatedMessages);
        return updatedMessages;
      });
      setError(null);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        sender: "system",
        text: "System error, please try again.",
      };

      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, errorMessage];
        saveMessagesToLocalStorage(updatedMessages);
        return updatedMessages;
      });
      setError("Error sending message, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
<Box component={"div"}>
  {!isOpen && (
    <Fab
      aria-label="open chat"
      onClick={() => setIsOpen(true)}
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        backgroundColor: "#000",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.53)",
        "&:hover": {
          backgroundColor: "#000",
        },
        zIndex: 1400,
      }}
    >
      <ChatIcon sx={{ color: "#fff" }} />
    </Fab>
  )}
  {isOpen && (
    <Box
      component={"div"}
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        width: "300px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        color: "#FF9B50",
        zIndex: 1400,
      }}
    >
      <Paper
        sx={{
          flex: "0 0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px",
          backgroundColor: "#000",
          color: "#fff",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Typography variant="h6">Ahmer AI</Typography>
        <IconButton color="inherit" onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Paper>
      <Paper
        ref={chatContainerRef} 
        sx={{
          flex: 1,
          overflowY: "auto",
          marginBottom: "10px",
          padding: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <Box
            component={"div"}
            key={index}
            sx={{
              display: "flex",
              justifyContent:
                msg.sender === "user" ? "flex-end" : "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            {msg.sender === "user" && (
              <>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "0.875rem",
                    marginRight: 2,
                    backgroundColor: "#d1edff",
                    color: "#00796b",
                    padding: "10px",
                    borderRadius: "10px",
                    lineHeight: "1.5",
                  }}
                >
                  {msg.text}
                </Typography>
                <Avatar alt="Visitor" src={visitor} />
              </>
            )}
            {msg.sender === "bot" && (
              <>
                <Avatar alt="Ahmer" src={ahmerai} />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "0.875rem",
                    marginLeft: 2,
                    backgroundColor: "#f1f0f0",
                    color: "#004d40",
                    padding: "10px",
                    borderRadius: "10px",
                    lineHeight: "1.5",
                  }}
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                />
              </>
            )}
            {msg.sender === "system" && (
              <Typography
                variant="body1"
                sx={{
                  fontSize: "0.875rem",
                  backgroundColor: "#ffcdd2",
                  color: "#b71c1c",
                  padding: "10px",
                  borderRadius: "10px",
                  lineHeight: "1.5",
                }}
              >
                {msg.text}
              </Typography>
            )}
          </Box>
        ))}
        {loading && (
          <Box
            component={"div"}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <CircularProgress size={24} />
            <Typography
              variant="body1"
              sx={{
                fontSize: "0.875rem",
                marginLeft: 2,
                backgroundColor: "#f1f0f0",
                color: "#004d40",
                padding: "10px",
                borderRadius: "10px",
                lineHeight: "1.5",
              }}
            >
              Ahmer is responding...
            </Typography>
          </Box>
        )}
      </Paper>
      {error && (
        <Typography
          variant="body2"
          color="error"
          sx={{ fontSize: "0.875rem", padding: "10px", lineHeight: "1.5" }}
        >
          {error}
        </Typography>
      )}
      <TextField
        variant="outlined"
        fullWidth
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        sx={{
          marginBottom: "10px",
          backgroundColor: "#fff",
        }}
        InputProps={{
          style: {
            fontSize: "0.875rem",
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: "0.875rem",
          },
        }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSendMessage}
        sx={{ backgroundColor: "#000", color: "#fff" }}
      >
        Send
      </Button>
    </Box>
  )}
</Box>

  );
};

export default ChatBox;
