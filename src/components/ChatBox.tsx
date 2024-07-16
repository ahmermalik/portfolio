import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  IconButton,
  Fab,
  Avatar
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

const ahmerai = "../images/ahmerai.png";
const visitor = "../images/visitor.png";

interface Message {
  sender: "user" | "bot" | "system";
  text: string;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi, I am Ahmer! What would you like to know about me?" }
  ]);
  const [input, setInput] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const saveMessagesToLocalStorage = (messages: Message[]) => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  };

  const clearMessages = () => {
    localStorage.removeItem("chatMessages");
    setMessages([{ sender: "bot", text: "Hi, I am Ahmer! What would you like to know about me?" }]);
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
        text: "System error, please try again",
      };

      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, errorMessage];
        saveMessagesToLocalStorage(updatedMessages);
        return updatedMessages;
      });
      setError("Error sending message, please try again.");
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
          color="primary"
          aria-label="open chat"
          onClick={() => setIsOpen(true)}
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          <ChatIcon />
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
          }}
        >
          <Paper
            sx={{
              flex: "0 0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px",
              backgroundColor: "#1976d2",
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
                        backgroundColor: "#e0f7fa",
                        color: "#00796b",
                        padding: "10px",
                        borderRadius: "10px",
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
                        backgroundColor: "#f1f8e9",
                        color: "#004d40",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                      dangerouslySetInnerHTML={{ __html: msg.text }} // Using dangerouslySetInnerHTML
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
                    }}
                  >
                    {msg.text}
                  </Typography>
                )}
              </Box>
            ))}
          </Paper>
          {error && (
            <Typography variant="body2" color="error" sx={{ padding: "10px" }}>
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
            sx={{ marginBottom: "10px" }}
          />
          <Button variant="contained" color="primary" onClick={handleSendMessage}>
            Send
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ChatBox;
